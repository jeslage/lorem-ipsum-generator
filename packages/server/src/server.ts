import { GraphQLServer } from "graphql-yoga";
import { schema } from "./schema";
import { createContext } from "./context";

new GraphQLServer({ schema, context: createContext }).start(
  { port: 8000 },
  ({ port }) => console.log(`🚀 Server ready at: http://localhost:${port}`)
);
