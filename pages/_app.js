import App from "next/app"
import React, { Component } from "react"
import withReduxStore from "../lib/with-redux-store"
import { Provider } from "react-redux"

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <div>Hello from _app</div>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
