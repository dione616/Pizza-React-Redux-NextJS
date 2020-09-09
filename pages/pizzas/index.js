import React, { Component } from "react"

class Pizzas extends Component {
  static async getInitialProps({ query }) {
    let pizzaData
    pizzaData = query.pizzaId

    return { pizzaData }
  }
  render() {
    return (
      <div>
        <h2>Pizza id is: {this.props.pizzaData}</h2>
      </div>
    )
  }
}

export default Pizzas
//TODO:func compon
