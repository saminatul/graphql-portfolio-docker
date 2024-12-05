const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const workResolvers = {
  Query: {
    works: () => prisma.work.findMany(),
    work: (_, { id }) => prisma.work.findUnique({ where: { id: Number(id) } }),
  },
  Mutation: {
    createWork: (_, { title, description, url }) => prisma.work.create({
      data: { title, description, url },
    }),
    updateWork: (_, { id, title, description, url }) => prisma.work.update({
      where: { id: Number(id) },
      data: { title, description, url },
    }),
    deleteWork: (_, { id }) => prisma.work.delete({ where: { id: Number(id) } }),
  },
};

module.exports = workResolvers;