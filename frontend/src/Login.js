import React, { Component } from 'react'
import './App.css';

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


  submitForm = event =>{
    event.preventDefault()

    const data ={
    logUname : this.state.username,
    logPass : this.state.password
  }

    if( logUname.length>2 && logPass.length>2){

        axios.post('http://localhost:4000/api/Login', data)
            .then(res => {
               console.log('success',res)
            })    
        this.setState({heading:"Logging User in"});



    }else{
      
      this.setState({heading:"Login Failed"});

    }   

    
}



render() {
  
    return (
        <div class="container">
        <form align="center" action="" onSubmit={this.submitForm}>
         
          
                  <h1>{this.state.heading}</h1>
                  {this.state.errorMessage}
                  <div className="form-group">
                                     
                  <div className="form-group">
                  <input type="text" required placeholder="Username" value={this.state.username} onChange={this.handleUname}/>
                 
                  </div>
                  <div className="form-group">
                  <input type="password" required placeholder="Password" value={this.state.password} onChange={this.handlePassW}/>
                  
                  
                  </div>
                  </div>
                  <button  type="submit" class="registerbtn">Register</button>
         </form>
        </div>
        
    )

}
}
export default Login;
