import React, { useContext } from "react";
import { TodoContext } from "../store/todos-context";
import TodoItem from "./Todoitem";
import classe from "./Todos.module.css";
const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classe.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.name}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
