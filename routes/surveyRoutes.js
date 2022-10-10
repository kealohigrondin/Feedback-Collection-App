const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplates");

module.exports = (app) => {
  /*
    PURPOSE:
    upload a new survey to DB
    SCHEMA: 
    title: string
    subject: string
    body: string
    recipients: string (list of emails separated by commas)
    */
  // order of middlewares is the order that they get executed in
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
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
    const mailer = new Mailer(survey, surveyTemplate(survey.body));
    //successful email send? -> save survey
    const sendRes = mailer.send();
    console.log(sendRes);
  });
};
