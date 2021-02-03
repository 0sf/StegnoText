import TabsB from "./TabsB";
import Navigation from "./Navigation";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error from "./pages/Error.js";
import About from "./pages/About.js";
import Stegno from "./pages/Stegno.js";
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <TabsB />
          </div>
        </Route>
        <Route path="/stegno">
          <Stegno />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
