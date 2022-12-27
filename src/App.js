import Checkout from "./components/addProject/Checkout";
import AddUser from "./components/addUser/AddUser";
import ConfigureUser from "./components/configureUser/ConfigureUser";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Checkout />
        <AddUser />
        <ConfigureUser />
    </div>
  );
}

export default App;
