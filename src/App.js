import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";

function App() {
  return (
    <div className="App">
          <Route exact path="/" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          sdasdasdsadasdasddas
    </div>
  );
}

export default App;
