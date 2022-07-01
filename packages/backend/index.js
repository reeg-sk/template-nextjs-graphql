const { ApolloServer } = require('apollo-server')

const { typeDefs, resolvers } = require("./src/index")


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  // https://www.apollographql.com/docs/apollo-server/security/cors/
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
