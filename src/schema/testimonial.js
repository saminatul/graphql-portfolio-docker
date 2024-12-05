const { gql } = require('apollo-server-express');

const testimonialTypeDefs = gql`
  type Testimonial {
    id: ID!
    author: String!
    content: String!
  }

  type Query {
    testimonials: [Testimonial!]!
    testimonial(id: ID!): Testimonial
  }

  type Mutation {
    createTestimonial(author: String!, content: String!): Testimonial!
    updateTestimonial(id: ID!, author: String, content: String): Testimonial!
    deleteTestimonial(id: ID!): Testimonial!
  }
`;

module.exports = testimonialTypeDefs;