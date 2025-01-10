import React from "react";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";
import ItemList from "./ItemList";

const App = () => {
  const foodList = ["Salmone", "Hamburger", "Pepe", "Coriandolo"]
  const bathList = ["Shampo", "Ammorbidente", "Dentifricio", "Rasoio"]


  return (
    <>
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <div>
        <h1>Lista Spesa</h1>
        <ItemList items={foodList}/>
        <ItemList items={bathList}/>
      </div>
    </>
  );
}

export default App;