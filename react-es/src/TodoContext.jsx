import React, { createContext, useState, useContext, useEffect } from "react";

// Crea il contesto
const TodoContext = createContext();

// Provider per lo stato dei to-do
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Effettua il fetch dei to-do al montaggio
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response.ok) {
                    throw new Error("Errore nel caricamento dei to-do");
                }
                const data = await response.json();
                setTodos(data); // Salva i to-do
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false); // Ferma il caricamento
            }
        };

        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, setTodos, isLoading, error }}>
            {children}
        </TodoContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto
export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos deve essere usato dentro un TodoProvider");
    }
    return context;
};
