import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);
  const TodoTextInput = useRef<HTMLInputElement>(null);
  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const TodoText = TodoTextInput.current!.value;
    if (TodoText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(TodoText);
  };
  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={TodoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
