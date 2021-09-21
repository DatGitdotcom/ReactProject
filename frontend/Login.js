import React, { Component } from 'react'

export class Login extends Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  
    this.state = {
   
       email: "",
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

    let validUname = this.state.username;
    let validEmail = this.state.email;
    let validPass = this.state.password;
    let error = '';
    let validate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    let validateP = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    

    if( validUname.length>2 && validate.test(validEmail) && validateP.test(validPass)){
      
     
      
     
        this.setState({heading:"Logging User in"});



    }else{
      
      this.setState({heading:"Login Failed"});

    }   
    this.setState({errorMessage : error});
    
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
                  {valusername}
                  </div>
                  <div className="form-group">
                  <input type="email" required placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                  {emaila}
                  <div className="form-group">
                  <input type="password" required placeholder="Password" value={this.state.password} onChange={this.handlePassW}/>
                  {valpass}
                  </div>
                  </div>
                  </div>
                  <button  type="submit" class="registerbtn">Register</button>
         </form>
        </div>
        
    )

}
}
export default Login;
