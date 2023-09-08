/* [09] Run effects only once */

import React, { Component } from 'react'

class ClassMouse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      xPos: 0,
      yPos: 0
    }
  }

  componentDidMount() {
    // We are setting up the event listener only once, in the componentDidMount() method
    window.addEventListener('mousemove', this.logMousePosition)
  }

  logMousePosition = (e) => {
    console.log('Mouse event');
    this.setState({ xPos: e.clientX, yPos: e.clientY })
  }

  render() {
    return (
      <div>
        <h3>X-pos: {this.state.xPos} Y-pos: {this.state.yPos}</h3>
      </div>
    )
  }
}

export default ClassMouse

/*
    Any task (piece of code) that we want to perform/execute only once, we do it inside the componentDidMount() method.
    Here we are adding the mouse move event listener only once.
*/
