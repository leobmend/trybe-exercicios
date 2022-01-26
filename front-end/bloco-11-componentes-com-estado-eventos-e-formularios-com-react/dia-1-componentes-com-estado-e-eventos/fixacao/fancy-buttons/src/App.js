import React from 'react';
import './App.css';

const somethings = [ 'Something!', 'Sometthing!', 'Sommetthing!'];
let index = 0;
function consoleSomething() {
  console.log(somethings[index]);
  index += 1;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={consoleSomething}>Click!</button>
        <button onClick={consoleSomething}>Click!</button>
        <button onClick={consoleSomething}>Click!</button>
      </div>
    );
  }
}

export default App;
