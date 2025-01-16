import React from "react";
import useFetch from "./hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const { data, isLoading, error } = useFetch(API_URL);

  if (isLoading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <div>
      <h1>Lista di To-Do</h1>
      <ul>
        {data &&
          data.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong> -{" "}
              {todo.completed ? "Completato" : "Incompleto"}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;