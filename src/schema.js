const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!
    year: SchoolYear
    interest_dept: [String]!
    cart: [Int]!
  }

  type Activity {
    id: ID!
    userId: Int!
    classId: Int!
    isLiked: Boolean!
    dateCreated: Date!
  }

  type Classes {
    id: ID
    classCode: String!
    classNo: Int!
    name: String!
    description: String!
    dept: String!
    school: String!
    prereqs: String!
  }

  enum SchoolYear {
    FRESHMAN
    SOPHOMORE
    JUNIOR
    SENIOR
  }

  scalar Date
`;

module.exports = typeDefs;
