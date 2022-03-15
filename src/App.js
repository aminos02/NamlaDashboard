import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        {/* <Sidebar /> */}
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
