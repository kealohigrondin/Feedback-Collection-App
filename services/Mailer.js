const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  /**
   *
   * @param {string, string[]} param0 subject: string containing email subject line, recipients: string array of email addresses
   * @param {string} content string that contains html
   */
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("kealohigrondin@gmail.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); //function that exists in helper.Mail
    this.addClickTracking();
    this.addRecipients();
  }

  /**
   *
   * @param {string[]} recipients array of strings containing email addresses
   * @returns {object[{email:string}]} object array of type {email: string}
   */
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  /**
   * adds click tracking to sendgrid
   */
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  /**
   * add each {email:string} to the personalize object (what)
   */
  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  /**
   * send post request to sendgrid to send email(s)
   * @returns http response from sendgrid
   */
  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
