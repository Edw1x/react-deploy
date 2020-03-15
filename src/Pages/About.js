import React, { Component } from "react";
import { Tab, Container, Nav, Row, Col } from "react-bootstrap";

import ped1 from "../assets/pedor1.jpg";
import ped2 from "../assets/pedor2.jpg";
import ped3 from "../assets/pedor3.jpg";
import ped4 from "../assets/pedor4.jpg";
import ped5 from "../assets/pedor5.jpg";
import logo from "../assets/team.jpg";

export default class About extends Component {
  render() {
    return (
      <Container className="red">
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">1 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">4 member</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">5 member</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={ped1} alt="" />
                  <p>this is 1 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={ped2} alt="" />
                  <p>this is 2 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={ped3} alt="" />
                  <p>this is 3 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={ped4} alt="" />
                  <p>this is 4 member</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src={logo}
                    height="500"
                    width="1000"
                    className="d-inline-block alighn-top"
                    alt="Logo"
                  />{" "}
                  <img src={ped5} alt="" />
                  <p>this is 5 member</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
