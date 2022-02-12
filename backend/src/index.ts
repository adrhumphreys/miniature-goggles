import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";

import { context } from "./context";
import { resolvers } from "./resolver";

const typeDefs = readFileSync("./src/schema.graphql").toString("utf-8");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const port = 3001;

app.use(
  "/graphql",
  graphqlHTTP({
    context: context,
    schema: schema,
    graphiql: true,
  })
);

const server = app.listen(port, () => {
  return console.log(
    `Express is listening at http://localhost:${port}/graphql`
  );
});

process.on("SIGTERM", () => {
  console.debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.debug("HTTP server closed");
  });
});
