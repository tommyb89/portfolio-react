import "./App.scss";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import { BrowserRouter as Router } from "react-router-dom";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Work />
      </div>
    </Router>
  );
}

export default App;
