import "./App.scss";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Work />
        <Experience />
      </div>
    </Router>
  );
}

export default App;
