import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

import "./styles/main.scss";

// Get Framer Motion https://framer.com/motion

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Details} />
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Photos: https://mattperry.photography
