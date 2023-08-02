import React from 'react'
import "./AddUsers.css"
const UsersList =(props)  => {
  return (
    <div>
      {props.list.map((user)=>{
        return( 
        <div className='userListDiv'>{ user.name}({user.age})</div>
        )
      
      })}
    </div>
  )
}

export default UsersList
