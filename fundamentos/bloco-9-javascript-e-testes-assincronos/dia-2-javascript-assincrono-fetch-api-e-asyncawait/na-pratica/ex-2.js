const url = 'https://api.coincap.io/v2/assets';

function addCoin(coin) {
  const coinsList = document.querySelector('main');
  
  const coinDiv = document.createElement('div');
  coinDiv.className = 'coin-div';
  
  const coinName = document.createElement('h2');
  coinName.className = 'coin-id';
  coinName.innerText = coin.name;

  const coinPrice = document.createElement('p');
  coinPrice.className = 'coin-price';
  coinPrice.innerText = `US$ ${parseFloat(coin.priceUsd).toFixed(3)}`;

  coinDiv.appendChild(coinName);
  coinDiv.appendChild(coinPrice);
  coinsList.appendChild(coinDiv)
}

function fetchCoins(callback) {
  const resquestOptions = {}
  fetch(url, resquestOptions)
    .then(response => response.json())
    .then(data => {
      Object.keys(data.data)
      .filter((index) => index < 25)
      .forEach((index) => {
          const coinObj = data.data[index]
          callback(coinObj);
        })
      console.log(data.data)
    })
}

window.onload = fetchCoins(addCoin);