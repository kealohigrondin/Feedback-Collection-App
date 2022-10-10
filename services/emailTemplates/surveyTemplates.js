const keys = require('../../config/keys');

module.exports = (body) => {
  return `<html>
  <body>
    <div style="text-align: center">
      <h3>Test Survey</h3>
      <p>please answer yes/no to the following question:</p>
      <p>${body}</p>
      <div><a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a></div>
      <div><a href="${keys.redirectDomain}/api/surveys/thanks">No</a></div>
    </div>
  </body> 
   </hmtl>`;
};
