const dotenv = require("dotenv/config")
const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")
const schema = require("./schema")

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV == "development"
})

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = server