import './App.css';
import Header from './Header';
import Pokemon from './Pokemon';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Pokemon pokemon={pokemons[0]} />
      </div>
    </div>
  );
}

export default App;
