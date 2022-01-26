import './App.css';
import Header from './Header';
import Pokemon from './Pokemon';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} />)}
      </main>
    </div>
  );
}

export default App;
