import React from "react"
import { Link } from "gatsby"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <div style={{ color: this.props.color }}>
        <h1>Counter page</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>
        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default Counter
