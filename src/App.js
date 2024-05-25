import "./App.css";
import Activity from "./components/Activity";
import Chart from "./components/Chart";
import List from "./components/List";
import Pie from "./components/Pie";
import Dashboard from "./containers/Dashboard";
import { SideBar } from "./containers/SideBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SideBar /> */}
        <Dashboard />
        {/* <List /> */}
        {/* <Activity /> */}
        {/* <Chart /> */}
      </header>
    </div>
  );
}

export default App;
