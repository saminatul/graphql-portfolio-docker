const { gql } = require('apollo-server-express');

const contactTypeDefs = gql`
  type Contact {
    id: ID!
    name: String!
    email: String!
    message: String!
  }

  type Query {
    contacts: [Contact!]!
    contact(id: ID!): Contact
  }

  type Mutation {
    createContact(name: String!, email: String!, message: String!): Contact!
    updateContact(id: ID!, name: String, email: String, message: String): Contact!
    deleteContact(id: ID!): Contact!
  }
`;

module.exports = contactTypeDefs;