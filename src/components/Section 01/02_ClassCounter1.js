/* [02] useState Hook */

import React, { Component } from 'react'

class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h3>Class Count : {this.state.count}</h3>
                <button onClick={this.incrementCount}>Count++</button>
            </div>
        )
    }
}

export default ClassCounter1

/*
    Steps to create a counter
    1. Create a class component.
    2. Create a state variable initialized to zero (count: 0).
    3. Create a method that is capable of setting the state value. (incrementCount())
*/
