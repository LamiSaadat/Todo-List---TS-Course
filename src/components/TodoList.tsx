import React from "react";

//tell TS the type of props this component is receiving
interface TodoListProps {
  items: { id: string; text: string }[];
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
