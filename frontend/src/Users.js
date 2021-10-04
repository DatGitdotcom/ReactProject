import React , { Component } from 'react'
import {List, Datagrid , TextField , EditButton , DeleteButton} from 'react-admin'


export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return  <List>
                    <Datagrid>
                        <TextField source='id'/>
                        <TextField source='fname'/>
                        <TextField source='username'/>
                        <EditButton basePath='/Edit'/> 
                        <DeleteButton basePath='/delete'/>
                    </Datagrid>

                </List>
    }
}

export default Users

