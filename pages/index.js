import React, { Component } from "react"
import Featured from "../components/includes/home/featured"
import Pizzas from "../components/includes/home/pizzas"
import axios from "axios"

class Home extends Component {
  static async getInitialProps() {
    let pizzasData

    try {
      const response = await axios.get("http://localhost:3000/api/v1/pizza")
      pizzasData = response.data
    } catch (error) {
      console.error(error)
    }

    return {
      pizzasData,
    }
  }
  render() {
    const { pizzasData } = this.props
    return (
      <div>
        <Featured pizzas={pizzasData} />
        <Pizzas pizzas={pizzasData} />
      </div>
    )
  }
}

export default Home
//TODO:1)Bring the Redux 2)Create DAL BLL 3)store.dispatch(thunkAC)
