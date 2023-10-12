const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
let server =  http.createServer((req,res) => {
   let reqBody = '';
   req.on('data', (data) => {
    reqBody += data;
   });
   req.on('end', () => {
    console.log(reqBody);
    req.reqBody = parseBody(reqBody)
   })
  });
const PORT = 5050;


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server.listen(PORT, () => {
  console.log(`Successfully started the server on port ${PORT}`)
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
