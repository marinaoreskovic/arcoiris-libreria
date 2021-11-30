import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Libreria Arcoíris!" />
      <ItemCount />
    </div>
  );
}

export default App;
