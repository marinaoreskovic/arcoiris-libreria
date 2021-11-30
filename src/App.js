import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Libreria Arcoíris!" />
    </div>
  );
}

export default App;
