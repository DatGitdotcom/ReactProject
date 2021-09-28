import React, { Component } from "react";
import axios from "axios";

export class UserHome extends Component {

  componentDidMount() {
    const config={
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('token')
      }
    }

    axios.post('http://localhost:4000/api/User',config)
        .then(response =>{
            this.setState({
                user : response.data
            })
            console.log(response.data)
        })
  };
 
  

  render() {
  
    return (
      <div>
        <h1>Home</h1>
   
      </div>
    );
  }
}

export default UserHome;
