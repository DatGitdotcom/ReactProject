import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        console.log("Constructor")
        super(props)
        this.state = {
             home: 'Home Page',
        }
    }
    componentDidMount(){
        console.log("Component did mount")
      }
    
    
   

    render() {
        console.log("Render Method")
        return (
            <div>
                <h1>{this.state.home}</h1>

                <p> Capability Development Tasks</p>
                <h2> GIT Tutorial: </h2>
                <ol>
                    <li>Init</li>
                    <li>Status</li>
                    <li>Add</li>
                    <li>Commit</li>
                    <li>Branch</li>
                    <li>Push</li>
                    <li>Fetch</li>
                    <li>Merge</li>
                    <li>Gitlab and Github</li>
                    <li>Clone</li>
                </ol>  

                <h2> React Library Tutorial: </h2>
                <ol>
                    <li>Environment Setup</li>
                    <li> Javascript XML (JSX)</li>
                    <li>Components</li>
                    <li> State</li>
                    <li>  Props Overview</li>
                    <li> Props Validation</li>
                    <li> Component API</li>
                    <li> Component Lifecycle</li>
                </ol>  


            </div>
        )
    }
}

export default Home
