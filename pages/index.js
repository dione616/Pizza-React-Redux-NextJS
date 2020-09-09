import React, { Component } from "react"
import Featured from "../components/includes/home/featured"
import Pizzas from "../components/includes/home/pizzas"

class Home extends Component {
  render() {
    return (
      <div>
        <Featured />
        <Pizzas />
      </div>
    )
  }
}

export default Home
