import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = ['Do the dishes', 'Organize my table', 'Vacuum my bedrom'];

function App() {
  return (
    <ol className="App">
      {toDoList.map((toDo) => Task(toDo))}
    </ol>
  );
}

console.log(toDoList.map((toDo) => Task(toDo)))

export default App;
