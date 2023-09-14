/* [31] useDocumentTitle custom hook */

import React, { useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocTitle1() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitle1

/*
    Here we are re-using the logic for updating document title instead of duplicating it in both the components. 

    We first create a state variable count and initialize it to 0.
    Then we call the custom hook useDocumentTitle and pass it the value of count state variable.
    On initial render, the count value of 0 gets passed to useDocumentTitle and document title is set to the passed in count value of 0.
    Execution goes back to the component and JSX is rendered.
    When we click on the button, the count is incremented to 1 and this causes the DocTitle1 to re-render. Count value is now 1 which gets passed to useDocumentTitle.
    In useDocumentTitle, the effect depends on count variable and since count changed from 0 to 1, the effect gets executed and title gets updated.
    Execution goes back to DocTitle1 and JSX is rendered with updated count value.
*/
