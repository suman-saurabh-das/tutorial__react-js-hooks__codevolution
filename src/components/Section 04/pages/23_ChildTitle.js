/* [26] useCallback hook */

import React from 'react'

function ChildTitle() {
  console.log('Rendered title');
  return (
    <div>
      <h3>useCallback Hook</h3>
    </div>
  )
}

export default React.memo(ChildTitle)
