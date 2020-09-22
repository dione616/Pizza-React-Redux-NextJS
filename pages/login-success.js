import React, { Component } from "react"
import MainLayout from "../components/layouts/mainLayout"

import auth0Serv from "../lib/appAuth"
import Router from "next/router"

class LoginSuccess extends Component {
  state = {
    error: false,
  }

  componentDidMount() {
    auth0Serv
      .handleAuthentication()
      .then(() => {
        Router.push("/admin")
      })
      .catch((err) => this.setState({ error: true }))
  }

  render() {
    return <>{!this.state.error ? <div>Samthing ...</div> : <div>Somthing went wrong</div>}</>
  }
}
export default LoginSuccess
