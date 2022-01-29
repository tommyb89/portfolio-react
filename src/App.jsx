import "./App.scss";
import Nav from "./components/Nav/Nav";
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
        {/* <Nav /> */}

        <Header />
        <Work />
        {/* <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route> */}
      </div>
    </Router>
  );
}

export default App;
