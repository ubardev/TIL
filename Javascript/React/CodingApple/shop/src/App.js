/* eslint-disable */

import React, {useContext, useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';

import {Link, Route, Switch, useHistory} from 'react-router-dom';
import Detail from "./Detail";
import Cart from "./Cart";
import axios from 'axios';

let 재고context = React.createContext();

function App() {

  let [shoes, setShoes] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">

            <재고context.Provider value={재고}>
            <div className="row">
              {
                shoes.map((shoe, index) => {
                  return (
                    <Card key={index} shoe={shoe} />
                  );
                })
              }
            </div>
            </재고context.Provider>
            <button className="btn btn-primary" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  setShoes([...shoes, ...result.data]);
                })
                .catch(() => {});
            }}>더 보기</button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나</div>
        </Route>
      </Switch>
    </div>
  );
}

const Card = ({ shoe }) => {
  let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <>
      <div className="col-md-4" onClick={() => { history.push('/detail/' + shoe.id) }}>
        <img src={ 'https://codingapple1.github.io/shop/shoes' + (shoe.id + 1) + '.jpg' } width="100%" />
        <h4>{ shoe.title }</h4>
        <p>{ shoe.content } & { shoe.price }</p>
        {재고}
      </div>
    </>
  );
}

export default App;
