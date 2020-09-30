const express = require("express")
const next = require("next")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

//check production or dvelopment
const dev = process.env.NODE_ENV !== "produciton"
const app = next({ dev })
//user get request handler from next
const handle = app.getRequestHandler()
mongoose
  .connect(process.env.MONGO_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(">Connected")
  })
  .catch((err) => {
    console.log(err)
  })

//<-- ----- MODELS ----- -->//
const Pizza = require("./models/pizza")
const Site = require("./models/site")
const Messages = require("./models/messages")

//<-- ----- ROUTES ----- -->//
app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.post("/api/v1/pizza", (req, res) => {
      const pizzaData = req.body //catch pizzaData from body
      const pizza = new Pizza(pizzaData) //grab model and create new instance

      pizza.save((err, pizza) => {
        //save data
        if (err) return res.status(422).send(err)
        return res.json(pizza)
      })
    })

    server.get("/api/v1/pizza", (req, res) => {
      Pizza.find({}, (err, allPizzas) => {
        if (err) {
          return res.status(422).send(err)
        }
        return res.json(allPizzas)
      })
    })

    server.get("/api/v1/pizza/:name", (req, res) => {
      let pizzaName = req.params.name

      Pizza.find({ idName: pizzaName }, (err, pizza) => {
        if (err) {
          return res.status(422).send(err)
        }
        return res.json(pizza)
      })
    })

    //
    server.get("/pizzas/:id", (req, res) => {
      const actualPage = "/pizzas"
      const queryParams = { pizzaName: req.params.id }

      //rendering req that we get
      app.render(req, res, actualPage, queryParams)
    })

    //<-- SITES -->//
    server.get("/api/v1/site", (req, res) => {
      Site.find({}, (err, site) => {
        if (err) {
          return res.status(422).send(err)
        }
        return res.json(site)
      })
    })

    //<-- MESSAGES -->//
    server.post("/api/v1/messages", (req, res) => {
      const msgData = req.body
      const messages = new Messages(msgData)

      messages.save((err, message) => {
        if (err) {
          return res.status(422).send(err)
        }
        return res.json({ status: "DONE" })
      })
    })

    server.patch("/api/v1/site", (req, res) => {
      let siteData = req.body

      //TODO:Post siteDate to MongoDB
      return res.json({ update: "Done" })
    })

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
