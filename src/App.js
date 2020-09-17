import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
