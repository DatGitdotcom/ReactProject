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
import Login from './Login' ; 
import UserHome from './UserHome';


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
                <Nav.Link as={Link} to={'/Login'}>Login</Nav.Link>
                <Nav.Link as={Link} to={'/Register'}>Register</Nav.Link>
                <Nav.Link as={Link} to={'/View'}>Views</Nav.Link>
                <Nav.Link as={Link} to={'/UserHome'}>UserHome</Nav.Link>
               
            </Nav>
            </Navbar.Collapse>
      
        </Navbar>
            <Switch>
            <Route exact path="/Home">
                <Home/>
            </Route>
            <Route exact path="/Login">
                <Login/>
            </Route>
            <Route exact path="/Register">
                <Register/>
            </Route>
            <Route exact path="/View">
                <Postslist/>
            </Route>
            <Route path="/UserHome">
                <UserHome/>
            </Route>
            </Switch>
      </div>
    </Router>

        )
    }
}

export default NavBar
