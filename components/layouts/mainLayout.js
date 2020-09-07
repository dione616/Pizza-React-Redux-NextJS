import React, { Component } from "react"
import Head from "next/head"
import Header from "../includes/Header"

const MainLayout = (props) => (
  <>
    <Head>
      <title>Pizzeria</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js"
      />
    </Head>
    <div className="mainLayout_container">
      <Header />
      <div className="main_container">{props.children}</div>
    </div>
  </>
)

export default MainLayout
