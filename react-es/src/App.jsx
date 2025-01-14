import React from "react";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";
import ItemList from "./ItemList";
import Card from "./Card";
import useFetch from "./useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const App = () => {
  const foodList = ["Salmone", "Hamburger", "Pepe", "Coriandolo"];
  const bathList = ["Shampo", "Ammorbidente", "Dentifricio", "Rasoio"];

  const { data, isLoading, error } = useFetch(API_URL);

  if (isLoading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <>
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <div>
        <h1>Lista Spesa</h1>
        <ItemList items={foodList} />
        <ItemList items={bathList} />
      </div>
      <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi architecto quae odit recusandae nam quod vitae esse dignissimos doloremque quo mollitia repellendus quidem laudantium, cum vel? Dolorem adipisci reiciendis nisi?</p>
      </Card>
      <div>
        <h1>Todo List</h1>
        <ul>
          {data && data.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Completato" : "Incompleto"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;