import React, { Component } from "react";
import axios from "axios";

export class UserHome extends Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  
    this.state = {
       space: " ",
     
    }
  }


  componentDidMount() {
    const accesstoken=localStorage.getItem('token') ;
   /* const authAxios = axios.create({
      baseURL:'http://localhost:4000/api',
      headers:{
        Authorization:`Bearer${" "}${accesstoken}`
      }
    }); */
    axios.interceptors.request.use(
      config => {config.headers.authorization = `Bearer${" "}${accesstoken}`
              return  config 
    },error =>{
      return Promise.reject(error)
    }
      
    );
    axios.post('http://localhost:4000/api/User')
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
