import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";

import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/categories" component={Categories} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/watched" component={Watched} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
