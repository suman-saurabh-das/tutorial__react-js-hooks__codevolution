/* [11] useEffect with incorrect dependency */

import React, { Component } from 'react'

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 })
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <h2>{this.state.count}</h2>
    )
  }
}

export default IntervalClassCounter

/*
    Steps to create an interval counter using class component

    1. We create a state variable count with initial value 0.
    2. Create an interval timer that will update the count value by 1 every 1 second.
        We create the timer in componentDidMount() which runs every second and updated the tick method.
    3. The tick method is used to update the count value by 1 every second.
*/
