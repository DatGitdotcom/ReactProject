import React, { Component } from 'react'
//import '.src/App.css';
import axios from 'axios';

export class CreateUser extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
      
        this.state = {
           fname: "",
           lname: "",
           email: "",
           username:"",
           password:"",
           heading: "React Demo app",
        }
      }
      
    
      handleFname=(event)=>{
        this.setState({
          fname: event.target.value,
        
        })
      }
      handleLname=(event)=>{
        this.setState({
          lname: event.target.value,
        
        })
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
    
        let validFname = this.state.fname;
        let validLname = this.state.lname;
        let validUname = this.state.username;
        let validEmail = this.state.email;
        let validPass = this.state.password;
        let error = '';
        let validate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        let validateP = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        
    
        if(validFname.length>2 && validLname.length>2 && validUname.length>2 && validate.test(validEmail) && validateP.test(validPass)){
          
         
          
         
            axios.post('/signup', this.state)
            .then(res => {
               console.log('success',res)
            })
            this.setState({heading:"React Demo Success"});
        }else{
          
          this.setState({heading:"React Demo Invalid inputs try again"});
    
        }   
        this.setState({errorMessage : error});
        
    }
  

  
    render() {
        let firsname = '';
        let lastname = '';
        let emaila = ''; 
        let valusername= '';
        let valpass = ''; 
        let validateEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        let validatePassword = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        if (this.state.fname ==='' &&  this.state.fname.length <=2) {
          firsname = <span>Invalid Input</span>;
        } else {
          firsname = '';
        }if (this.state.lname ==='' && this.state.lname.length <=2 ) {
          lastname = <span>Invalid Input</span>;
        } else {
          lastname = '';
         }if (this.state.username ==='' && this.state.username.length <=2 ) {
          valusername = <span>Invalid Username</span>;
        } else {
          valusername = '';
        }
        if ( this.state.email !=='' && validateEmail.test(this.state.email)) {
          emaila = '';
        } else {
          
          emaila = <span>Invalid Email</span>;
        } if ( this.state.password !=='' && validatePassword.test(this.state.password)) {
          valpass = '';
        } else {
          
          valpass = <span>Invalid Password</span>;
        }
        console.log('Render')
        return (
            <div class="container">
            <form align="center" action="" onSubmit={this.submitForm}>
             
              
                      <h1>{this.state.heading}</h1>
                      
                      <div className="form-group">                     
                      <input type="text" required placeholder="First Name" value={this.state.fname} onChange={this.handleFname}/>
                      {firsname}
                      </div>
                      <div className="form-group">
                      <input type="text" required placeholder="Last Name" value={this.state.lname} onChange={this.handleLname}/>
                      {lastname}
                      </div>
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
                      <button  type="submit" class="registerbtn">Create User</button>
             </form>
            </div>
        )

}
}
export default CreateUser ;
