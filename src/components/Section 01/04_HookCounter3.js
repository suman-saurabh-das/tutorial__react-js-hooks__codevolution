/* [04] useState with Object */

import React, { useState } from 'react'

function HookCounter3() {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            <input 
                type="text" value={name.firstName} 
                onChange={(e) => setName({ ...name, firstName: e.target.value })} 
            />
            <input 
                type="text" value={name.lastName} 
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Your first name is : {name.firstName}</h2>
            <h2>Your last name is : {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounter3

/*
    NOTE - A state variable can be assigned a string, a number, a boolean, an object or an array.

    When setting the state of an object, we will have to use the spread operator to merge the previous state with the current state, if we do not do it, only one of the object property gets updated. To merge the previous and current state, we will be using the spread operator.

    NOTE - setState() in class component merges the state
    but useState hook doesn't automatically merge and update the object.

    Spread operator is used to copy everything from the name object and then we can update the specific property.
*/
