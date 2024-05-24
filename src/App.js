import "./App.css";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <pagination />
      </header>
    </div>
  );
}

export default App;
