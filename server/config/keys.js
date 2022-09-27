//keys.js - figure out what set of credentials to use based on environment
console.log("NODE ENVIRONMENT: " + process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  //return prod set of keys
  module.exports = require("./prod.js");
} else {
  //return dev set of keys
  module.exports = require("./dev.js");
}
