const mongoose = require("mongoose");
const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");

const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const surveyTemplate = require("../services/emailTemplates/surveyTemplates");

module.exports = (app) => {
  /**
   * should be called with url options response=yes/no and surveyId that corresponds
   *   to the survey that they're responding to
   *
   * should add a response to
   */
  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for replying");
  });

  /**
   * should update survey with new response received
   */
  app.post("/api/surveys/webhook", (req, res) => {
    console.log("Webhook hit");
    const p = new Path("/api/surveys/:surveyId/:choice");

    _.chain(req.body) //argument passed to chain is what we are operating on in each function
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) return { ...match, email };
      })
      .compact() //removes undefined elements in list
      .uniqBy("email", "surveyId") //removes elements with duplicate email/surveyIds
      .each(({ surveyId, choice, email }) => {
        //foreach loop
        //finds a record in first object and updates matches based on second object passed in
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: { $elemMatch: { email: email, responded: false } },
          },
          {
            $inc: {
              [choice]: 1, //$inc finds choice property and INCrements it's value by 1
            }, //set recipient.responded that matches the $elemMatch to true
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec(); //actually executes the updateOne that we just created
      })
      .value(); //assigns result to the provided const

    res.send({}); //prevents sendgrid from repeatedly sending the same requests
  });

  /*
    PURPOSE:
    upload a new survey to DB
    SCHEMA: 
    title: string
    subject: string
    body: string
    recipients: string (emails separated by commas)
    */
  // order of middlewares is the order that they get executed in
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    //create new survey instance
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })), //splits the string of recipients into individual objects with parameter 'email'
      _user: req.user.id,
      dateSent: Date.now(),
    });
    //create and send off email (with params survey and template which represents the html body of the actual email)
    const mailer = new Mailer(survey, surveyTemplate(survey));
    //successful email send? -> save survey
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      //user inside req is now stale (out of date) so we update the local user and send it back to requestor
      res.send(user);
    } catch (err) {
      //unprocessable entity (user did something wrong)
      res.status(422).send(err);
    }
  });

  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    }); //.select receipients false removes recipients from the returned list of resulting surveys
    res.send({ surveys });
  });

  app.delete("/api/surveys", requireLogin, async (req, res) => {
    console.log("req body", req.body);
    //delete survey
    const { acknowledged, deletedCount } = await Survey.deleteOne({
      _id: req.body.surveyId,
      _user: req.user.id,
    });
    if (!(deletedCount > 0 && acknowledged)) {
      res.status(418);
    }
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    }); //.select receipients false removes recipients from the returned list of resulting surveys
    res.send({ surveys });
  });
};
