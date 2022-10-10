const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

/*
_user: owner of the survey
lastResponded: date that the latest survey response was received
*/
const surveySchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("surveys", surveySchema);
