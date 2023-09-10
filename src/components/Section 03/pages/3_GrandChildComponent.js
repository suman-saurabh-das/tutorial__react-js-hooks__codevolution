/* [16] [17] useContext Hook - Part 2, Part 3 */

import React from 'react'
import { UserContext, WorkContext } from '../14_DataPassingUsingContext'

function GrandChildComponent() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return <WorkContext.Consumer>{
              work => {
                return (<div>
                  <h4>{user} the {work}</h4>
                  <p>User context value is : {user} & Work context value is : {work}</p>
                </div>)
              }
            }</WorkContext.Consumer>
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default GrandChildComponent

/*
    Steps to pass data from DataPassingUsingContext.js component to GrandChildComponent.js

    1. Create a context using React.createContext()
        (Create it in the parent component from which you want to pass the data to the child component)
    2. Provide this context a value using ContextName.Provider and passing in a value attribute.
        (Provider must wrap the children components for the value to be available)
    3. Consume the context value using ContextName.Consumer and inside it creating a function to use the passed value.
        (We will have to make use of the render props pattern to get hold of the value passed by the context)

    The value being passed by the provider is being used by the consumer in the required component using the render props pattern.

    Disadvantages of this method to pass props
        • The code is difficult to understand.
        • It is difficult to pass multiple props.
*/
