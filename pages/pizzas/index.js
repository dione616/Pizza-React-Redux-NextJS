import React, { Component } from "react"
import axios from "axios"

class Pizzas extends Component {
  static async getInitialProps({ query }) {
    let pizzaData

    try {
      const response = await axios.get(`http://localhost:3000/api/v1/pizza/${query.pizzaName}`)
      pizzaData = response.data
    } catch (error) {
      console.error(error)
    }

    return { pizzaData }
  }
  render() {
    console.log(this.props)
    let pizza = this.props.pizzaData[0]
    return (
      <>
        <div className="pizza_page">
          <div className="top" style={{ background: `url("/static/images/${pizza.image}")` }}></div>
          <div className="middle">
            <h1>{pizza.name}</h1>
            <div className="description">{pizza.fullDesc}</div>
            <div className="price">Get it for ${pizza.price}</div>
          </div>
        </div>
      </>
    )
  }
}

export default Pizzas
//TODO:func compon
