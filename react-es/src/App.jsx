import React from "react";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";
import ItemList from "./ItemList";
import Card from "./Card";
import TodoList from "./TodoList";
import useFetch from "./hooks/useFetch";
import useFilteredTodos from "./hooks/useFilteredTodos";
import { TodoProvider } from "./TodoContext";

const App = () => {
  const foodList = ["Salmone", "Hamburger", "Pepe", "Coriandolo"];
  const bathList = ["Shampo", "Ammorbidente", "Dentifricio", "Rasoio"];

  return (
    <>
      <TodoProvider>
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
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;