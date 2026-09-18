import {useRef, useState} from "react";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = inputRef.current.value;
    // setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodos([...todos, newTodo]);
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <h2 >To-Do List</h2>


      <ul>
        {todos.map((item) => (
          <li>
            {item}
          </li>
        ))}

      </ul>
      <input ref={inputRef} placeholder="enter item ..."/>

      <button onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}

export default App;