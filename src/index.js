const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolver");
const { createStore } = require('./utils');

const ClassAPI = require('./data_sources/class');

// creates a sequelize connection once. NOT for every request
const store = createStore();

// set up any dataSources our resolvers need
const dataSources = () => ({
  classAPI: new ClassAPI({ store })
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// test ur db connection
// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/test');
// (async () => {
//   try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
