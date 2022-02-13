import { Resolvers, Notebook } from "./resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    users: (_p, _a, context) => context.prisma.user.findMany(),
    user: (_p, { id }, context) =>
      context.prisma.user.findUnique({ where: { id } }),
    notebooks: (_p, { authorId }, context) =>
      context.prisma.notebook.findMany({
        where: { authorId },
      }),
    notebook: (_p, { id }, context) =>
      context.prisma.notebook.findUnique({ where: { id } }),
    notes: (_p, { notebookId }, context) =>
      context.prisma.note.findMany({
        where: { notebookId },
      }),
    note: (_p, { id }, context) =>
      context.prisma.note.findUnique({ where: { id } }),
  },
  User: {
    notebooks: ({ id }, _args, context) =>
      context.prisma.notebook.findMany({
        where: { authorId: id },
      }),
  },
  Notebook: {
    author: ({ authorId }, _a, context) =>
      context.prisma.user.findUnique({
        where: { id: authorId },
      }),
    notes: ({ id }, _a, context) =>
      context.prisma.note.findMany({ where: { notebookId: id } }),
  },
  Note: {
    notebook: ({ notebookId }, _a, context) =>
      context.prisma.notebook.findUnique({
        where: { id: notebookId },
      }),
  },
  Mutation: {
    addUser: (_p, { name, email }, context) =>
      context.prisma.user.create({
        data: {
          name,
          email,
        },
      }),
    addNotebook: (_p, { authorId, title }, context) =>
      context.prisma.notebook.create({ data: { authorId, title } }),
    updateNotebook: (_p, { id, title }, context) =>
      context.prisma.notebook.update({ where: { id }, data: { title } }),
    removeNotebook: (_p, { id }, context) =>
      Boolean(context.prisma.notebook.delete({ where: { id } })),
    addNote: (_p, { notebookId, title, content }, context) =>
      context.prisma.note.create({
        data: { notebookId, title, content: content ?? "" },
      }),
    updateNote: (_p, { id, notebookId, title, content }, context) =>
      context.prisma.note.update({
        where: { id },
        data: { notebookId, title, content },
      }),
    removeNote: (_p, { id }, context) =>
      Boolean(context.prisma.note.delete({ where: { id } })),
  },
};
