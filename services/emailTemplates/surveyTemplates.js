module.exports = (body) => {
  return `<html>
  <body>
    <div style="text-align: center">
      <h3>Test Survey</h3>
      <p>please answer yes/no to the following question:</p>
      <p>${body}</p>
      <div><a href='http://localhost:3000">Yes</a></div>
      <div><a href='http://localhost:3000">No</a></div>
    </div>
  </body> 
   </hmtl>`;
};
