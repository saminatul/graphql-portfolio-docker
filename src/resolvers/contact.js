const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const contactResolvers = {
  Query: {
    contacts: () => prisma.contact.findMany(),
    contact: (_, { id }) => prisma.contact.findUnique({ where: { id: Number(id) } }),
  },
  Mutation: {
    createContact: (_, { name, email, message }) => prisma.contact.create({
      data: { name, email, message },
    }),
    updateContact: (_, { id, name, email, message }) => prisma.contact.update({
      where: { id: Number(id) },
      data: { name, email, message },
    }),
    deleteContact: (_, { id }) => prisma.contact.delete({ where: { id: Number(id) } }),
  },
};

module.exports = contactResolvers;