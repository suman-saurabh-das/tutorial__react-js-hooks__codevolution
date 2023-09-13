/* [29] useRef Hook to store a mutable value */

import React, { Component } from 'react'

class ClassTimer extends Component {
  interval
  constructor(props) {
    super(props)

    this.state = {
      timer: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h3>Class Timer : {this.state.timer}</h3>
        <button onClick={() => clearInterval(this.interval)}>Clear timer</button>
      </div>
    )
  }
}

export default ClassTimer
