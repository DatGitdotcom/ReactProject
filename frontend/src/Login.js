import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
 import {withRouter} from "react-router-dom";
 

export class Login extends Component {
  constructor(props) {
    
    super(props)
  
  
    this.state = {
       username:"",
       password:"",
       heading: "Login",

    }
  }
  
  handleUname=(event)=>{
    this.setState({
      username: event.target.value,
    
    })
  }
  handleEmail=(event)=>{
    this.setState({
      email: event.target.value,
    
    })
  }
  handlePassW=(event)=>{
    this.setState({
      password: event.target.value,
    
    })
  }


  submitForm = async (event , history) =>{
    event.preventDefault()
    let username = this.state.username;
    let password = this.state.password;


              if( username.length>2 && password.length>2){

              const data ={username , password }
              console.log(data)
                    await  axios.post('http://localhost:4000/api/Login', data )
                    .then(res => {
                      localStorage.setItem('token', res.data.token);
                      console.log('success',res)
                      this.props.history.push("/UserHome")

                       
                    } ) 
            }else{
                    
                  this.setState({heading:"Login Failed"});

            }
            
            
          }
          showAlert=()=> {
            this.props.history.push("/Home");
          }



render() {
  
    return (
        <div class="container">
        <form align="center" action="" onSubmit={this.submitForm}>
         
          
                  <h1>{this.state.heading}</h1>
                  <div className="form-group">
                                     
                  <div className="form-group">
                  <input type="text" required placeholder="Username" value={this.state.username} onChange={this.handleUname}/>
                 
                  </div>
                  <div className="form-group">
                  <input type="password" required placeholder="Password" value={this.state.password} onChange={this.handlePassW}/>
                  
                  
                  </div>
                  </div>
                   <button  type="submit" class="registerbtn">Login</button>
                   <button onClick={this.showAlert}>show alert</button> 
                   
                 
         </form>
        </div>
        
    )

}
}
export default withRouter (Login);
