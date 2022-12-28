import Checkout from "./components/addProject/Checkout";
import MapAchievments from "./components/mapAchievments/MapAchievments";
import ConfigureUser from "./components/configureUser/ConfigureUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ConfigureUser />
      <Checkout />
      <MapAchievments />
    </div>
  );
}

export default App;
