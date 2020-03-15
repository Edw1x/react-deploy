import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";

function App() {
  return (
    <>
    <div className="App">
      <h1>bagdan pomogi</h1>
    </div>
    <div>
      Hi
      <br />
      <Link to="/page2">Go to Page2</Link>
    </div>
    </>
  );
}

export default App;
