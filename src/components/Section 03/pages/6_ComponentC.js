/* [22] useReducer with useContext */

import React, { useContext } from 'react'
import { CountContext } from '../19_CounterContainer'

function ComponentC() {
  const count = useContext(CountContext)
  return (
    <div>
      ComponentC : {count.countValue}&emsp;
      <button onClick={() => count.countDispatch('increment')}>Increment</button>
      <button onClick={() => count.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => count.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentC
