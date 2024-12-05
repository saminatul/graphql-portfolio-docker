const { gql } = require('apollo-server-express');
const projectTypeDefs = require('./project');
const workTypeDefs = require('./work');
const testimonialTypeDefs = require('./testimonial');
const questionTypeDefs = require('./question');
const contactTypeDefs = require('./contact');

const typeDefs = gql`
  ${projectTypeDefs}
  ${workTypeDefs}
  ${testimonialTypeDefs}
  ${questionTypeDefs}
  ${contactTypeDefs}
`;

module.exports = typeDefs;