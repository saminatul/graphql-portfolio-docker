const projectResolvers = require('./project');
const workResolvers = require('./work');
const testimonialResolvers = require('./testimonial');
const questionResolvers = require('./question');
const contactResolvers = require('./contact');

const resolvers = {
  Query: {
    ...projectResolvers.Query,
    ...workResolvers.Query,
    ...testimonialResolvers.Query,
    ...questionResolvers.Query,
    ...contactResolvers.Query,
  },
  Mutation: {
    ...projectResolvers.Mutation,
    ...workResolvers.Mutation,
    ...testimonialResolvers.Mutation,
    ...questionResolvers.Mutation,
    ...contactResolvers.Mutation,
  },
};

module.exports = resolvers;