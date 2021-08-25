import React, { Component } from 'react'
import './App.css';



export class Chnageheading extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             heading: 'React demo App'
        }
    }
    changeHeading() {
        this.setState({
            heading: 'React demo App State changed',
        
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.heading}</h1>
                <button  onclick={()=> this.changeHeading()}>Change heading</button>
            </div>
        )
    }
}

export default Chnageheading

