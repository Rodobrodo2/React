import React from "react";
import useFetch from "./hooks/useFetch";
import useFilteredTodos from "./hooks/useFilteredTodos";
import { useState, useCallback, useMemo } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const { data, isLoading, error } = useFetch(API_URL);
  const  [searchTerm, setSearchTerm] = useState("");
  
  // Memorizza la funzione di gestione dell'input con useCallback
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []); // Nessuna dipendenza: la funzione non cambi

  const filteredTodos = useMemo(() => {
    if (!data) return []; // Gestisce il caso in cui i dati non sono ancora caricati
    return data.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]); // Ricalcola solo quando `data` o `searchTerm` cambiano

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
        onChange={handleSearchChange}
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