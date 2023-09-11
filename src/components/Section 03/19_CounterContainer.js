/* [22] useReducer with useContext */

import React, { useReducer } from 'react'
import ComponentA from './pages/4_ComponentA'
import ComponentB from './pages/5_ComponentB'
import ComponentD from './pages/7_ComponentD'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
    default: return state
  }
}

export const CountContext = React.createContext()

function CounterContainer() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countValue: count, countDispatch: dispatch }}>
      <div>
        <h4>Count : {count}</h4>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </div>
    </CountContext.Provider>
  )
}

export default CounterContainer

/*
    Till now we have seen useReducer with - Local State Management
    Now we will share states between components with - Global State Management
    i.e. -> useReducer + useContext

    In this example, we have created the counter logic and states using useReducer hook and then we are passing the count state and dispatch method to the Components A, D & F using the CounterContext.
    We have passed the count and dispatch as an object and since we are sharing the same count state and dispatch method, we are able to update the state from any of the components.
*/
