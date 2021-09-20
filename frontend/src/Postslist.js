import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import {Table , Button} from 'react-bootstrap'


export class Postslist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editing: false,
             posts:[],
           Uid: '',
           Ufname:'',
           Ulname:'',
           Uemail:'',
           Uusername:''

        }
    }


    componentWillMount(){
        console.log("Component will mount");
        console.log("---------------------");
      }    
    
    componentDidMount() {
        this.refreshUsers();
     
    }
  
    deleteRegistered= async (_id)=>{
       await axios.delete(`http://localhost:4000/api/${_id}`)
        .then(response =>{
            this.refreshUsers();
            console.log("success" + response)
        }).catch(error=>console.log(error));
    }
    refreshUsers(){
        axios.get('http://localhost:4000/api/usersList')
        .then(response =>{
            this.setState({
                posts : response.data


            })
            console.log("Component did mount");
            console.log("---------------------");
            console.log(response.data)
        })


    }
    EditUsers= (_id , fname , lname ,username, email)=>{
       console.log(_id , fname , lname ,username, email);
        this.setState({
            editing:true,
            Uid: _id,
           Ufname:fname,
           Ulname:lname,
           Uemail: email,
           Uusername: username,

        })
     }
     CancelEdit= ()=>{
        this.setState({
            editing:false,
        })
     }
     handleFname=(event)=>{
        this.setState({
          Ufname: event.target.value,
        
        })
      }
      handleLname=(event)=>{
        this.setState({
          Ulname: event.target.value,
        
        })
      }
      handleUname=(event)=>{
        this.setState({
         Uusername: event.target.value,
        
        })
      }
      handleEmail=(event)=>{
        this.setState({
          Uemail: event.target.value,
        
        })
      }
      
     Submitedit= async (Uid)=>{
        await axios.patch(`http://localhost:4000/api/Edit/${Uid}` ,
         {
             fname: this.state.Ufname,
            lname:this.state.Ulname,
            username:this.state.Uusername,
            email:this.state.Uemail,
          } )
         .then(response =>{
             this.refreshUsers();
             console.log("success" + response.data)
         }).catch(error=>console.log(error)); 
     }
    render() {
        const { posts } = this.state
        return (
            <div>
                <h1>List of posts</h1>
                <Table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.state.editing ?
                           
                                <tr>
                            <td>{this.state.Uid}</td>        
                            <td><input type="Text" defaultValue={this.state.Ufname} value={this.state.Ufname} onChange={this.handleFname} /> </td>
                            <td><input type="text" defaultValue={this.state.Ulname}  value={this.state.Ulname} onChange={this.handleLname} /> </td>
                            <td><input type="text" defaultValue={this.state.Uusername} value={this.state.Uusername} onChange={this.handleUname} /></td>
                            <td><input type="email" defaultValue={this.state.Uemail} value={this.state.Uemail} onChange={this.handleEmail} /></td>
                            <td><td><Button bg="dark" variant="Dark"onClick={this.Submitedit.bind(this, this.state.Uid)} >Submit Edit</Button></td></td>
                            <td><td><Button bg="dark" variant="Dark"onClick={this.CancelEdit} >Cancel</Button></td></td>
                        
                        </tr>
      
                        :null}
                        { posts.map(post =>
                        <tr key={post.id}>
                        <td> {post._id } </td>
                        <td> {post.fname } </td>
                        <td>  {post.lname} </td>
                        <td>  {post.username} </td>
                        <td>  {post.email }</td>
                        <td><Button bg="dark" variant="Dark" onClick={this.deleteRegistered.bind(this, post._id)}>Delete</Button></td>
                        <td><Button bg="dark" variant="Dark"onClick={this.EditUsers.bind(this, post._id , post.fname, post.lname , post.username , post.email)} >Edit</Button></td>   
                        </tr>
                        )}
                    </tbody>
                  
                </Table>               
            </div>
        )
    }
}

export default Postslist;