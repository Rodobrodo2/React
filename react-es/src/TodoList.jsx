import React, { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useTodos } from "./TodoContext";

const TodoList = () => {
  const { todos, isLoading, error } = useTodos(); // Accesso ai dati dal contesto
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  // Focus automatico sull'input
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Gestione del cambio dell'input di ricerca
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Filtra i to-do usando useMemo per ottimizzare
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);

  if (isLoading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Lista di To-Do</h1>
      <input
        type="text"
        placeholder="Cerca..."
        value={searchTerm}
        onChange={handleSearchChange}
        ref={searchInputRef}
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