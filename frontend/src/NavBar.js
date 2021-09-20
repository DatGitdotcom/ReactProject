import React, { Component } from 'react'
import {Navbar , Nav  }from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Register from './Register';
import Home from './Home';
import Postslist from './Postslist';


export class NavBar extends Component {
    render() {
        return (
            <Router>
            <div>
        <Navbar bg="dark" variant="dark" expand="lg">
       
            <Navbar.Brand href="#home">React Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to={'/Home'}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/Register'}>Register</Nav.Link>
                <Nav.Link as={Link} to={'/View'}>Views</Nav.Link>
               
            </Nav>
            </Navbar.Collapse>
      
        </Navbar>
            <Switch>
            <Route path="/Home">
                <Home/>
            </Route>
            <Route path="/Register">
                <Register/>
            </Route>
            <Route path="/View">
                <Postslist/>
            </Route>
            </Switch>
      </div>
    </Router>

        )
    }
}

export default NavBar