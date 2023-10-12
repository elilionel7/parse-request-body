const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');

const server = http.createServer((req, res) => {
  let reqBody = '';

  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (reqBody) {
      // Parsing the request body string into an object
      req.body = parseBody(reqBody);
    }

    // Always call sendFormPage even if the request doesn't have a body
    sendFormPage(req, res);
  });
});





/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Successfully started the server on port ${PORT}`)
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
