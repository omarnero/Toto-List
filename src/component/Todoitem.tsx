import React from "react";
import classse from "./Todoitem.module.css";
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classse.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};
export default TodoItem;
