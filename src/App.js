import logo from './logo.svg';
import './App.css';

function App() {

  let toDoList = [
    {name: "Learn React"},
    {name: "Climb Mt. Everest"},
    {name: "Run a marathon"},
    {name: "Feed the dogs"}
  ]

  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I have to do:</h2>
      <ul>
        {toDoList.map(todo => {
          return <li>{todo.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
