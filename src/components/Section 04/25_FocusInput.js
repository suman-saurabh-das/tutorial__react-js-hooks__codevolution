/* [28] useRef Hook - Part 1 */

import React, { useEffect, useRef } from 'react'

function FocusInput() {
  const inputRef = useRef(null)
  useEffect(() => {
    // focus the input using useRef
    console.log(inputRef);
    inputRef.current.focus()
  }, [])
  
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput

/*
    useRef hook allows us to access DOM nodes directly within components.
    In this e.g. we are creating a reference variable inputRef, which will initially hold a null value. Then we are assigning the inputRef to the ref attribute of input element, now the current attribute of inputRef will hold the input element and we can use the focus method.
*/
