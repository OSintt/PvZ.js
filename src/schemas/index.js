import { createSchema } from "graphql-yoga";
import Query from "./controllers/Query";
import typeDefs from "./controllers/Schema.GraphQL";

export const schema = createSchema({
  typeDefs,
  resolvers: {
    Query
  },
});
