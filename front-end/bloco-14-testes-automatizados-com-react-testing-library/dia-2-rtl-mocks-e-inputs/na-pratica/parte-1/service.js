function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

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

module.exports = { randomNumber, upperCaseString, firstLetter, concatenateStrings, fetchDog };
