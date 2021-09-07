import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import {Table} from 'react-bootstrap'

export class Postslist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }


    componentWillMount(){
        console.log("Component will mount");
        console.log("---------------------");
      }    
    
    componentDidMount() {
        axios.get('http://localhost:3000/users')
        .then(response =>{
            this.setState({
                posts : response.data


            })
            console.log("Component did mount");
            console.log("---------------------");
            console.log(response.data)
        })
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
                        { posts.map(post =>
                        <tr key={post.id}>
                        <td> {post.fname } </td>
                        <td>  {post.lname} </td>
                        <td>  {post.email }</td>
                        <button >Delete</button>   
                        </tr>
                        )}
                    </tbody>
                  
                </Table>               
            </div>
        )
    }
}

export default Postslist;
