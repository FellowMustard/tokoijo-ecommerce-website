import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <div className="overflow-fixer">
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
