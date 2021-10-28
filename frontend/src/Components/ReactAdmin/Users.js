import React  from 'react'
import {List, Datagrid , TextField , EditButton , DeleteButton} from 'react-admin'

const Users =(props) => {
    return  <List {...props}>
                    <Datagrid>
                        <TextField source='_id'/>
                        <TextField source='fname'/>
                        <TextField source='lname'/>
                        
                        <TextField source='email'/>
                        <EditButton basePath='/Edit'/> 
                        <DeleteButton basePath='/delete'/>
                    </Datagrid>

                </List>
    
}
export default Users

//<TextField source='username'/>