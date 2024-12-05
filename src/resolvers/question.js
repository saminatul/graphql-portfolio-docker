const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const questionResolvers = {
  Query: {
    questions: () => prisma.question.findMany(),
    question: (_, { id }) => prisma.question.findUnique({ where: { id: Number(id) } }),
  },
  Mutation: {
    createQuestion: (_, { question, answer }) => prisma.question.create({
      data: { question, answer },
    }),
    updateQuestion: (_, { id, question, answer }) => prisma.question.update({
      where: { id: Number(id) },
      data: { question, answer },
    }),
    deleteQuestion: (_, { id }) => prisma.question.delete({ where: { id: Number(id) } }),
  },
};

module.exports = questionResolvers;