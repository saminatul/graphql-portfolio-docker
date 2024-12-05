const { gql } = require('apollo-server-express');

const projectTypeDefs = gql`
  type Project {
    id: ID!
    title: String!
    description: String!
    url: String!
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
  }

  type Mutation {
    createProject(title: String!, description: String!, url: String!): Project!
    updateProject(id: ID!, title: String, description: String, url: String): Project!
    deleteProject(id: ID!): Project!
  }
`;

module.exports = projectTypeDefs;