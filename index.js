//const graphqlYoga = require("graphql-yoga");
import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

console.log("hoh!");

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL Server Running!"));