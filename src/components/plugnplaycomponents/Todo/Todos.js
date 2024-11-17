import React, { useState, useEffect } from "react";
import icon from '../../../assets/checkmark.png';
const API_URL = "https://dummyjson.com/todos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`${API_URL}?limit=50`);
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.todos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const markTodoCompleted = (id) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(nextTodos);
  };

  if (loading)
    return <div className="text-center text-blue-600">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-lg mx-auto mt-8 mb-10">
      <h1 className="text-xl text-center mb-10 text-gray-800">
        Todo List
      </h1>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-3 rounded-lg shadow-md ${
              todo.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => markTodoCompleted(todo.id)}
                className="mr-3 h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-400"
              />
              <span
                className={`text-lg ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {todo.todo}
              </span>
            </div>
            {todo.completed && (
              <span className="text-green-600 font-medium"><img className="w-5 h-5" src={icon} alt="done" /></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
