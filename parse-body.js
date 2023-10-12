function firstStep(input) {
  // Your code here
  return input.split('&')
}

function secondStep(input) {
  // Your code here
  return input.map((el) => el.split('='))
}

function thirdStep(input) {
  // Your code here
  return input.map((el) => el.join(", ").replace(/\+/g, " ").split(", "))
}

function fourthStep(input) {
  return input.map((el) => decodeURIComponent(el.join(", ")).split(", "))
}

function fifthStep(input) {
  return input.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;

  }, {});
}

function parseBody(str) {
  // Your code here
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
