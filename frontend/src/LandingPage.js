import React, { Component } from "react";
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import Users from'./Users';
export class LandingPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return <Admin dataProvider={restProvider ('https://jsonplaceholder.typicode.com/posts')}>
            <Resource name='users' list={Users} />

        </Admin>
    }
}

export default LandingPage
