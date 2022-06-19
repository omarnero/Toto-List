import "./App.css";
import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import TodoContextProvider from "./store/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
