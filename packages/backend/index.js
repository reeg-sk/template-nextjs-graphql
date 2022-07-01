const { ApolloServer } = require('apollo-server');

const { typeDefs, resolvers } = require("./src/index");


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
