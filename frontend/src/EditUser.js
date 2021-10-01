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
                    user: res.data})
                    console.log(res.data)
        }
        
        
        )
        .catch(err =>{
            console.log(err)
        })
    }
   
      
      FnameChange=(event)=>{
        this.setState({
          user: event.target.value
      
        })
      }
      LnameChange=(event)=>{
        this.setState({
           user: event.target.value
      
        })
      }
      UnameChange=(event)=>{
        this.setState({
          user: event.target.value
      
        })
      }
      EmailChange=(event)=>{
        this.setState({
          user: event.target.value
      
        })
      }
     
      submitForm = event =>{
          event.preventDefault();
         let fname = this.state.user.fname;
         let lname = this.state.user.lname;
         let username = this.state.user.username;
         let email = this.state.user.email;
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
          
          this.setState({heading:"Some fields are incorrect, please review the edit"});
    
        }   
       
      
      
    }
    
    render() {
      
      
      
        return (
           
                <div class="container">
          
          <form align="center" onSubmit={this.submitForm} >
          
         <h1>{this.state.heading} {this.state.user.fname} </h1>
             
                 <div className="form-group">                     
                     <input type="text"  value={this.state.user.fname} onChange={this.FnameChange} />
             
                 </div>
                 <div className="form-group">
                     <input type="text"   value={this.state.user.lname}   onChange={this.LnameChange} />
             
                 </div>
                 <div className="form-group">
                     <input type="text"   value={this.state.user.username}  onChange={this.UnameChange}  />
             
                 </div>
                 <div className="form-group">
                     <input type="email"  value={this.state.user.email} onChange={this.EmailChange}  />
             
                 
                 </div>
                 <button  type="submit" class="registerbtn">Submit</button>
         </form>
         
         
        
         </div>
        
        )
    }
}

export default withRouter (EditUser)

