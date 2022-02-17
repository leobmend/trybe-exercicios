const randomNumber = () => {
  return (Math.random()*100).toFixed(0);
}

const upperCaseString = (string) => {
  return string.toUpperCase();
}

const firstLetter = (string) => {
  return string[0];
}

const concatenateStrings = (string1, string2) => {
  return string1 + string2;
}

module.exports = { randomNumber, upperCaseString, firstLetter, concatenateStrings };
