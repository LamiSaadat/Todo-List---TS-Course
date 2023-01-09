import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

export const NewTodo: React.FC<NewTodoProps> = (props) => {
  //useRef is a generic function. We want to know which kind of data will be stored inside the ref. Provide nul as default value b/c when the code executes so that it doesn't point at anything
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <form className="form-control" onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">TO DO</label>
        <input type="text" id="todo-text" ref={textInputRef} />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};
