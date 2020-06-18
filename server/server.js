require("dotenv").config();
const express = require("express");
require("./db.js");
const port = 5000;
const app = express();
const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
const Schema = require("./resolvers");

const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();

// Setup Apollo
const server = new ApolloServer({
  schema: Schema,
});

server.applyMiddleware({ app });

app.use(urlencodedParser);
app.use(jsonParser);

app.listen({ port }, () =>
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
);

console.log(`Server running on port ${port}`);
