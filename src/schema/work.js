const { gql } = require('apollo-server-express');

const workTypeDefs = gql`
  type Work {
    id: ID!
    title: String!
    description: String!
    url: String!
  }

  type Query {
    works: [Work!]!
    work(id: ID!): Work
  }

  type Mutation {
    createWork(title: String!, description: String!, url: String!): Work!
    updateWork(id: ID!, title: String, description: String, url: String): Work!
    deleteWork(id: ID!): Work!
  }
`;

module.exports = workTypeDefs;