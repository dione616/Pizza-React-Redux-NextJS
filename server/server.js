const express = require("express")
const next = require("next")

//check production or dvelopment
const dev = process.env.NODE_ENV !== "produciton"
const app = next({ dev })

//user get request handler from next
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    //
    server.get("/pizzas/:id", (req, res) => {
      const actualPage = "/pizzas"
      const queryParams = { pizzaId: req.params.id }

      //rendering req that we get
      app.render(req, res, actualPage, queryParams)
    })
    //

    //tell next to handle all pages
    server.get("*", (req, res) => {
      return handle(req, res) //let next handle this req and res
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log(">ready on port 3000")
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
