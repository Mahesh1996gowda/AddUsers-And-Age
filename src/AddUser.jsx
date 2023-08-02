import React, { useState } from 'react'
import Card from './Card';
import ErrMode from './ErrMode';
const AddUser = (props) => {
    const[enteredUserName,setEnteredUserName]=useState('')
    const[enteredAge,setEnteredAge]=useState('') 
    const[error,setError]=useState('')
    const[list,setList]=useState([])
    const errorHandler=()=>{
      setError(null)
            } 
    const handelSubmit=(e)=>{
    e.preventDefault();
    if(enteredUserName.trim().length===0||enteredAge.trim().length===0){
      setError({
        title:"An Error occurred!!!!",
        message:"Please enter valid username or age"
      })
      
        return;
    }
    if(enteredAge<1){
      setError({
        title:"An Error occurred!!!!",
        message:"Please enter valid username or age"
      })
        return;
     }else{
       const newList=[...list]
       newList.push(enteredUserName  +`   (${enteredAge}years old)`)
       setList(newList)
    }
 
    setEnteredUserName("")
    setEnteredAge("")
    setError("")
      }
     
  return (
    <Card key="form">
       <form onSubmit={handelSubmit}>
        <label htmlFor='userName'>UserName</label><br />
        <input type='text' id='userName' value={enteredUserName} onChange={(e)=>setEnteredUserName(e.target.value)}/><br />
        <label htmlFor='Age'>Age</label><br />
        <input type='number'id='Age' value={enteredAge} onChange={(e)=>setEnteredAge(e.target.value)}/><br />
        <button type='submit' className='formButton' >Add User</button>
      </form>
    <div className='mainDiv'>{list.map((e)=>{
      return( 
        <div className='userListDiv'>{e}</div>
      )
    })}</div>
    {error &&<ErrMode key="ErrorModel" title={error.title} message={error.message} onSubmit={errorHandler}/>}
    </Card>
   
  )
}

export default AddUser
