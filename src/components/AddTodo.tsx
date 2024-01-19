import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addTodo(input));

    setInput("");
  };

  return (
    <div className="p-3">
      <form onSubmit={handleOnSubmit} className="flex gap-4">
        <input
          type="text"
          placeholder="Enter your Todos"
          className="focus:outline-none rounded-3xl p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="bg-blue-300 px-5 rounded-lg">Add todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
