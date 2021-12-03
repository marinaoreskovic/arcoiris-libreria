import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}
export default App;
