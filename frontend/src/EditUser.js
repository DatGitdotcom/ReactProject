
import React , {useState , useEffect } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";


function EditUser() {

   const params = useParams();
    
    const [user, setUser]=useState({});
    
    /*const [fname , setFname]=useState('');
    const [lname, setLname]=useState('');
    const [username , setUsername]=useState('');
    const [email, setEmail]=useState('');
    */

    useEffect( () =>{
        
        axios.get(`http://localhost:4000/api/${params._id}`)
        .then(res=>{
            console.log(res)
            setUser(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
     
        },[params._id]);
  
 

        return (
        <div class="container">
          
             <form align="center" action="" >
             
            <h1>editing {user.fname}</h1>
                
                    <div className="form-group">                     
                        <input type="text" required placeholder="First Name"  value={user.fname}  onchange={(e)=>{setUser(e.target.value)}} />
                
                    </div>
                    <div className="form-group">
                        <input type="text" required placeholder="Last Name" value={user.lname} onchange={(e)=>{setUser(e.target.value)}} />
                
                    </div>
                    <div className="form-group">
                        <input type="text" required placeholder="Username" value={user.username} onchange={(e)=>{setUser(e.target.value)}}  />
                
                    </div>
                    <div className="form-group">
                        <input type="email" required placeholder="Email" value={user.email} onchange={(e)=>{setUser(e.target.value)}}  />
                
                    
                    </div>
                    <button  type="submit" class="registerbtn">Register</button>
            </form>
            
            
           
            </div>
    )
}

export default EditUser
