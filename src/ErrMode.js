import React from 'react'

const ErrMode = (props) => {
  return (
    <div className='errorMainDiv'>
    <div className='errorDiv1'>
      <header>
        <h2>{props.title}</h2>
      </header>
      </div>
      <div className='errorDiv2'>
        <p>{props.message}</p>
      </div >
      <div  className='errorDiv3'>
      <footer>
      {props.title && <button className='errorButton'>Okay</button>}
      </footer>
    </div>
    </div>
  )
}

export default ErrMode
