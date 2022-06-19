import React, { useState } from "react";
import Todo from "../models/Todo";
type TodoContextObj = {
  items: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (todo: string) => {},
  removeTodo: (id: string) => {},
});
const TodoContextProvider: React.FC<{}> = (props) => {
  const [itodo, setItodo] = useState<Todo[]>([]);
  const AddTodoHandler = (todo: string) => {
    let newTodo = new Todo(todo);

    setItodo((preve) => {
      return preve.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    setItodo((preev) => {
      return preev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  let contextValue: TodoContextObj;
  contextValue = {
    items: itodo,
    addTodo: AddTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
