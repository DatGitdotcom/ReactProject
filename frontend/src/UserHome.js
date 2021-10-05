import React, { Component } from "react";
import axios from "axios";



export class UserHome extends Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  
    this.state = {
       user: [],
     
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
  Logout  =() =>  {
    axios.post('http://localhost:4000/api/Logout')
    .then(res => {
       console.log(res)
       localStorage.clear();
    })
  }
  
 
  

  render() {
    if(this.state.user){
      return(
        <div>
        <h2> {this.state.user.username} is logged in</h2>
        <button onClick={this.Logout}>show alert</button>
      
        </div>
        )
    }else{
      return (
        <div>
          <h1>Home</h1>
     
        </div>
      );
    }

    }
  
    
}

export default UserHome;
