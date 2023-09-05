
// useRef is primarily used to access and manipulate the DOM or store mutable values without triggering re-renders

import React, { useRef } from 'react';
import "../App.css"

const UseRef = () => {
 const ref = useRef(null);


const handleClick = () => {
    console.log(ref);
    ref.current.focus()
}
  return (
    <div className='App-header'>
      <h2>UseRef()Hook</h2>
      <input ref={ref} onChange={handleClick}/>
    </div>
  )
}

export default UseRef
