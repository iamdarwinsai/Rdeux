import { useSelector, useDispatch } from "react-redux";
import { TodoType, removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  //@ts-ignore
  const todos = useSelector((state) => state.todo);
  return (
    <div className="w-[500px] p-2 mt-4 max- max-lg:w-[50%] text-center">
      <h2 className="text-4xl font-sans mt-5 ">Todos List</h2>
      <ul className="mt-3">
        {todos.map((todo: TodoType) => (
          <li
            className=" my-4 rounded-lg bg-slate-600 p-3 flex justify-between"
            key={todo.id}
          >
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="mx-2 text-red-500 bg-slate-50 px-2 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
