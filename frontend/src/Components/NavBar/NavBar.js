
import React, { Component } from 'react'
import {Navbar , Nav  }from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Register from '../UserFunctions/Register';
import Home from '../Info/Home';
import Postslist from '../UserFunctions/Postslist';
import Login from '../UserFunctions/Login' ; 
import UserHome from '../UserFunctions/UserHome' ;
import EditUser from '/../UserFunctions/EditUser';
// import TestPage from './TestPage';
// import Users from './Users'
import LandingPage from '../ReactAdmin/LandingPage';


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
            <Route path="/Edit/:_id">
                <EditUser/>
            </Route>
            <Route exact path="/View">
                <Postslist/>
            </Route>
            <Route path="/UserHome">
                <UserHome/>
            </Route>
            <Route path="/AdminPage">
                <LandingPage/>
            </Route>
            </Switch>
      </div>
    </Router>

        )
    }
}

export default NavBar