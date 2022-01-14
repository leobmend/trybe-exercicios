const url = 'https://api.coincap.io/v2/assets';

function addCryptos(cryptoObj) {
  const cryptoIl = document.createElement('li');
  cryptoIl.innerText = cryptoObj.id
  cryptoList.appendChild(cryptoIl)
}

function fetchCoins(callback) {
  const resquestOptions = {}
  fetch(url, resquestOptions)
    .then(response => response.json())
    .then(data => {
      Object.keys(data.data).forEach((index) => {
        const cryptoObj = data.data[index]
        callback(cryptoObj);
      })
      // data.data
      // addCryptos(data.data, 5);
    })
}

window.onload = fetchCoins(addCryptos);