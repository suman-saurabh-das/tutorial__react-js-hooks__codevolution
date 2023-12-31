/* [07] useEffect after render */

import React, { Component } from 'react'

class ClassCounter3 extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = `You clicked ${this.state.count} times`
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}>
          Count {this.state.count}
        </button>
      </div>
    )
  }
}

export default ClassCounter3
