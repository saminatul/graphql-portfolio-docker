const { gql } = require('apollo-server-express');

const questionTypeDefs = gql`
  type Question {
    id: ID!
    question: String!
    answer: String!
  }

  type Query {
    questions: [Question!]!
    question(id: ID!): Question
  }

  type Mutation {
    createQuestion(question: String!, answer: String!): Question!
    updateQuestion(id: ID!, question: String, answer: String): Question!
    deleteQuestion(id: ID!): Question!
  }
`;

module.exports = questionTypeDefs;