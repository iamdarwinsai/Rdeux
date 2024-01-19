import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="p-2 flex flex-col items-center max-w-[1240px] mx-auto">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
