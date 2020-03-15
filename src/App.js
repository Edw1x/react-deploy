import React from "react";
import "./Pages/App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import background from "./Pages/background";
import login from "./Pages/Login";
import contacts from "./Pages/Contacts";
import register from "./Pages/Register";
import about from "./Pages/About";

import 'bootstrap/dist/css/bootstrap.min.css';

//import Home from "../Pages/Home";
import { Navbar, Nav, Container, Form } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar
        className="navbar-custom"
        collapseOnSelect
        expand="md"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="https://edw1x.github.io/react-deploy/?#/">WanderLance</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://edw1x.github.io/react-deploy/?#/">Home</Nav.Link>
              <Nav.Link href="https://edw1x.github.io/react-deploy/?#/page2">About</Nav.Link>
              <Nav.Link href="https://edw1x.github.io/react-deploy/?#/page3">Contacts</Nav.Link>
              <Nav.Link href="https://edw1x.github.io/react-deploy/?#/page5">Login</Nav.Link>
            </Nav>
            <Form className="cA" inline>
              <div className="cA">
                <button type="submit">Click here to make smth</button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <HashRouter>
        <Switch>
          <Route exact path="/" component={background} />
          <Route exact path="/page2" component={about} />
          <Route exact path="/page3" component={contacts} />
          <Route exact path="/page4" component={register} />
          <Route exact path="/page5" component={login} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
