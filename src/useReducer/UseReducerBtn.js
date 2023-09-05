

// useReducer() is Pure Function which accepts the state and Action and returns the new State.


import React, { useReducer } from 'react';
import "../App.css";
import "./useReducerBtn.css";

const initalValue = 0

const reducer = (state,action) => {
    console.log(state,action);

    if(action.type === "INC") {
      return state + 1
    }
    if(action.type === "DEC") {
        return state - 1
      }
    return state
}

function UseReducerBtn() {

    const[state,dispatch] = useReducer(reducer, initalValue)

  return (
    <div className='App-header'>
        <p>{state}</p>
       <button className='btnInc' onClick={()=>dispatch({ type: "INC" })}>Add</button> 
       <button className='btnInc' onClick={()=>dispatch({ type: "DEC" })}>Dec</button> 
    </div>
  )
}

export default UseReducerBtn
