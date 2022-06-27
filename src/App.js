import "./App.css";
import TodoInputs from "./component/TodoInputs";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App m-5">
      <h4>TODO LIST with Redux</h4><br/><br/>
      <TodoInputs />
      <TodoList />
    </div>
  );
}

export default App;
