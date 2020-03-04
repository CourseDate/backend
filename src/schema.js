const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    me: [Class]
  }

  type User {
    id: ID!
    year: SchoolYear
    interest_dept: [String]!
    cart: [Int]!
  }

  type Activity {
    id: ID!
    user: User!
    class: Class!
    isLiked: Boolean!
    dateCreated: Date!
  }

  type Class {
    id: ID
    classCode: String
    classNo: Int
    name: String
    description: String
    dept: String
    school: String
    prereqs: String
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
