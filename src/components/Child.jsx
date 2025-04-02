import React from 'react'

const Child = ({setInputValue}) => {
  return (
    <div className="child">
      <h1>Child Component</h1>
      <input 
        onChange={(e)=>setInputValue(e.target.value)}
      type="text" />
      
    </div>
  )
}

export default Child
