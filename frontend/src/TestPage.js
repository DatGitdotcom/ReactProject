import React,{useState} from 'react'

function TestPage() {
    const [name , setName]=useState('John')

    function update(){
        setName('mark');

    }
  
    return (
        <div>
            {name}
           <input type="text" required placeholder="Password" />
           <button onclick={update}> display</button>
        </div>
    )
}

export default TestPage
