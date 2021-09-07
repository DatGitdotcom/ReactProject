import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
export class Register extends Component {
    constructor(props) {
        super(props)
  
      
        this.state = {
           fname: "",
           lname: "",
           email: "",
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
      handleEmail=(event)=>{
        this.setState({
          email: event.target.value,
        
        })
      }
    
    
      submitForm = event =>{
        event.preventDefault()
    
        let validFname = this.state.fname;
        let validLname = this.state.lname;
        let validEmail = this.state.email;
        let error = '';
        let validate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        
    
        if(validFname.length>2 && validLname.length>2 && validate.test(validEmail) ){
          
          this.setState({heading:"React Demo Success"});
          
         
            axios.post('http://localhost:3000/users', this.state)
            .then(res => {
               console.log('success',res )
            })
    
    
    
        }else{
          
          this.setState({heading:"React Demo Invalid inputs try again"});
        }   
        this.setState({errorMessage : error});
        
    }
  
    render() {
        let firsname = '';
        let  lastname = '';
        let emaila = ''; 
        let validateEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (this.state.fname ==='' &&  this.state.fname.length <=2) {
          firsname = <span>Invalid Input</span>;
        } else {
          firsname = '';
        }if (this.state.lname ==='' && this.state.lname.length <=2 ) {
          lastname = <span>Invalid Input</span>;
        } else {
          lastname = '';
        }if ( this.state.email !=='' && validateEmail.test(this.state.email)) {
          emaila = '';
        } else {
          
          emaila = <span>Invalid Email</span>;
        }
        console.log('Render')
        return (
            <div class="container">
            <form align="center" action="" onSubmit={this.submitForm}>
             
              
                      <h1>{this.state.heading}</h1>
                      {this.state.errorMessage}
                      <div className="form-group">
                     
                      <input type="text" required placeholder="First Name" value={this.state.fname} onChange={this.handleFname}/>
                      {firsname}
                      </div>
                      <div className="form-group">
                     
                      <input type="text" required placeholder="Last Name" value={this.state.lname} onChange={this.handleLname}/>
                      {lastname}
                      </div>
                      <div className="form-group">
                      
                      <input type="email" required placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                      {emaila}
                      </div>
                      <button  type="submit" class="registerbtn">Register</button>
             </form>
            </div>
        )

}
}
export default Register ;
