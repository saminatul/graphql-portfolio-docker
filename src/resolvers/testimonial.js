const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const testimonialResolvers = {
  Query: {
    testimonials: () => prisma.testimonial.findMany(),
    testimonial: (_, { id }) => prisma.testimonial.findUnique({ where: { id: Number(id) } }),
  },
  Mutation: {
    createTestimonial: (_, { author, content }) => prisma.testimonial.create({
      data: { author, content },
    }),
    updateTestimonial: (_, { id, author, content }) => prisma.testimonial.update({
      where: { id: Number(id) },
      data: { author, content },
    }),
    deleteTestimonial: (_, { id }) => prisma.testimonial.delete({ where: { id: Number(id) } }),
  },
};

module.exports = testimonialResolvers;