import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';

export class EditUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user:[],
            fname: "",
            lname: "",
            username:"",
            email:"",
            heading:"Editing",
            
            id : this.props.match.params._id 
        }
    }
    componentDidMount(){
       
        axios.get(`http://localhost:4000/api/${this.state.id}`)
        .then(res=>{
                this.setState({
                    user:res.data,
                    fname: res.data.fname,
                    lname: res.data.lname,
                    username: res.data.username,
                    email: res.data.email,
                  })
                    console.log(res.data)
        }
        
        
        )
        .catch(err =>{
            console.log(err)
        })
    }
   
      
      FnameChange=(event)=>{
        this.setState({
          fname: event.target.value
      
        })
      }
      LnameChange=(event)=>{
        this.setState({
           lname: event.target.value
      
        })
      }
      UnameChange=(event)=>{
        this.setState({
          username: event.target.value
      
        })
      }
      EmailChange=(event)=>{
        this.setState({
          email: event.target.value
      
        })
      }
     
      submitForm = event =>{
          event.preventDefault();
         let fname = this.state.fname;
         let lname = this.state.lname;
         let username = this.state.username;
         let email = this.state.email;
          let editdata= this.state.id;
        let validate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
          
          if(fname.length>2 && lname.length>2 && username.length>2 && validate.test(email)){

            const data ={fname, lname , username , email}
            console.log(data, editdata)
           axios.patch(`http://localhost:4000/api/Edit/${editdata}` , data)
            .then(res => {
               console.log('success',res)
            })
            this.setState({heading:"Edit submitted"});
        }else{
          
          this.setState({heading:"Some fields are incorrect, please review the edit for"});
    
        }   
       
      
      
    }
    
    render() {
      let firsname = '';
      let lastname = '';
      let emaila = ''; 
      let valusername= '';
    
      let validateEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
     
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
      }
      
      
      
        return (
           
                <div class="container">
          
          <form align="center" onSubmit={this.submitForm} >
          
         <h1>{this.state.heading} {this.state.user.fname} </h1>
             
                 <div className="form-group">                     
                     <input type="text" defaultValue={this.state.fname} value={this.state.fname} onChange={this.FnameChange} />
                     {firsname}
             
                 </div>
                 <div className="form-group">
                     <input type="text"   value={this.state.lname}   onChange={this.LnameChange} />
                     {lastname}
             
                 </div>
                 <div className="form-group">
                     <input type="text"   value={this.state.username}  onChange={this.UnameChange}  />
                     {valusername}
             
                 </div>
                 <div className="form-group">
                     <input type="email"  value={this.state.email} onChange={this.EmailChange}  />
                     {emaila}
             
                 
                 </div>
                 <button  type="submit" class="registerbtn">Submit</button>
         </form>
         
         
        
         </div>
        
        )
    }
}

export default withRouter (EditUser)

