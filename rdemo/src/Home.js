import React, { Component } from 'react'

export class Home extends Component {
    componentWillUnmount(){

        console.log("unmount")
    }


    render() {
        
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home
