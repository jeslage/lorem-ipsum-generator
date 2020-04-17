import { ApolloServer } from "apollo-server";

import { createContext } from "./context";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext
});

server.listen({ port: 8000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
