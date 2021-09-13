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
        }
    }


    componentWillMount(){
        console.log("Component will mount");
        console.log("---------------------");
      }    
    
    componentDidMount() {
        this.refreshUsers();
     
    }
  
    deleteRegistered= async (id)=>{
       await axios.delete(`http://localhost:5000/users/${id}`)
        .then(response =>{
            this.refreshUsers();
            console.log("success" + response)
        }).catch(error=>console.log(error));
    }
    refreshUsers(){
        axios.get('http://localhost:5000/users')
        .then(response =>{
            this.setState({
                posts : response.data


            })
            console.log("Component did mount");
            console.log("---------------------");
            console.log(response.data)
        })


    }
    EditUsers= (id)=>{
       console.log(id);
        this.setState({
            editing:true,
  
        })
     }
     CancelEdit= ()=>{
        this.setState({
            editing:false,
        })
     }
     Submitedit= ()=>{
       console.log("Submit edited users")
     }
    render() {
        const { posts } = this.state
        return (
            <div>
                <h1>List of posts</h1>
                <Table >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.state.editing ?
                           
                                <tr>
                            <td><input type="Text" defaultValue="Name" /> </td>
                            <td><input type="text" defaultValue="Lname" /> </td>
                            <td><input type="email" defaultValue="Email"/></td>
                            <td><td><Button bg="dark" variant="Dark"onClick={this.Submitedit} >Submit Edit</Button></td></td>
                            <td><td><Button bg="dark" variant="Dark"onClick={this.CancelEdit} >Cancel</Button></td></td>
                        
                        </tr>
      
                        :null}
                        { posts.map(post =>
                        <tr key={post.id}>
                        <td> {post.fname } </td>
                        <td>  {post.lname} </td>
                        <td>  {post.email }</td>
                        <td><Button bg="dark" variant="Dark" onClick={this.deleteRegistered.bind(this, post.id)}>Delete</Button></td>
                        <td><Button bg="dark" variant="Dark"onClick={this.EditUsers.bind(this, post.id)} >Edit</Button></td>   
                        </tr>
                        )}
                    </tbody>
                  
                </Table>               
            </div>
        )
    }
}

export default Postslist;
