
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {
  const [inputValue , setInputValue] = useState("");
  return (
    <div className="parent"
    style={{
      backgroundColor:"green",
      padding : "10px"
      }}
    >
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <p
          style={{
            backgroundColor:"white",
            padding : "10px"
          }}
        >{inputValue}</p>
        
        <Child 
          style={{
            backgroundColor : "red",
            padding : "10px"
          }}
          setInputValue={setInputValue}
        />
    </div>
  )
}

export default App
