import React from "react";
import useFetch from "./hooks/useFetch";
import useFilteredTodos from "./hooks/useFilteredTodos";
import { useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const { data, isLoading, error } = useFetch(API_URL);
  const  [searchTerm, setSearchTerm] = useState("");
  const filteredTodos = useFilteredTodos(data || [], searchTerm);

  if (isLoading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <div>
      <h1>Lista di To-Do</h1>
      <input 
        type="text" 
        placeholder="Cerca..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTodos.map((todo) => (
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