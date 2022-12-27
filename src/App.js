import Checkout from "./components/addProject/Checkout";
import AddUser from "./components/addUser/AddUser";
import ConfigureUser from "./components/configureUser/ConfigureUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ConfigureUser />
      <Checkout />
      <AddUser />
    </div>
  );
}

export default App;
