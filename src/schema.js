const { gql } = require("apollo-server");

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

module.exports = typeDefs;
