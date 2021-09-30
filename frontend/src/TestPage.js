import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

export class TestPage extends Component {

    showAlert() {
        alert("I'm an alert");
      }
      
    render() {
        return (
            <div>
              <h1>Hi</h1>
              <button onClick={this.showAlert}>show alert</button>  
            </div>
        )
    }
}

export default withRouter (TestPage)
