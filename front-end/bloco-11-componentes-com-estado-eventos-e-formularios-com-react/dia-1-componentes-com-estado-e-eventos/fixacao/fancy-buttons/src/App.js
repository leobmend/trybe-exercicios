import React from 'react';
import './App.css';

const somethings = [ 'Something!', 'Sometthing!', 'Sommetthing!'];
let index = 0;

class App extends React.Component {
  constructor() {
    super();

    this.consoleSomething = this.consoleSomething.bind(this);
  }

  consoleSomething(something) {
    console.log(this)
    console.log(something);
  }

  render() {
    return (
      <div>
        {somethings.map((something) => 
          <button onClick={() => this.consoleSomething(something)}>Click!</button>
        )}
      </div>
    );
  }
}

export default App;
