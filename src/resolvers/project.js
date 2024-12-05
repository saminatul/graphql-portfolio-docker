const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const projectResolvers = {
  Query: {
    projects: () => prisma.project.findMany(),
    project: (_, { id }) => prisma.project.findUnique({ where: { id: Number(id) } }),
  },
  Mutation: {
    createProject: (_, { title, description, url }) => prisma.project.create({
      data: { title, description, url },
    }),
    updateProject: (_, { id, title, description, url }) => prisma.project.update({
      where: { id: Number(id) },
      data: { title, description, url },
    }),
    deleteProject: (_, { id }) => prisma.project.delete({ where: { id: Number(id) } }),
  },
};

module.exports = projectResolvers;