const express = require("express")
const graphqlHTTP = require("express-graphql")
const { buildSchema } = require("graphql")
const connection = require("./mysqlConnection")

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = { hello: () => "Hello world!" }

const getData = () => {
  connection.connect()
  connection.query("SELECT * from userdata;", function(err, rows, fields) {
    if (err) {
      console.log("err: " + err)
    }
    console.log("name: " + rows[0].name)
    console.log("id: " + rows[0].id)
  })
  connection.end()

  return "got db data"
}

const app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000, () => console.log(getData()))
