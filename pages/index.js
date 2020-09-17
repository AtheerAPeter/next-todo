import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const addNew = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          placeholder="write note"
          value={todo}
          onChange={handleInput}
        />
        <button onClick={addNew}>+</button>
      </div>

      <div className="list">
        {todos.map((item, index) => {
          return (
            <div key={index} className="list-items">
              <p>{item}</p>
              <button
                onClick={() => setTodos(todos.filter((el) => el !== item))}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
