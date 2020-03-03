const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    id: Int!
    year: Int!
    interest_dept: [String]!
    cart: [Int]!
  }
`;
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const sample = { id: 123, year: 1, interest_dept: ["GEN_ENG"], cart: [] };
const resolvers = {
  Query: {
    me: () => sample
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
