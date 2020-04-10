import { IResolvers, makeExecutableSchema } from "graphql-tools";
import { Context } from "./context";

const typeDefs = `
  type Query {
    presets: [Preset!]!
    preset(id: ID!): Preset
  }

  type Mutation {
    createPreset(name: String!, description: String, textType: String!, settings: String!): Preset
    deletePreset(id: ID!): Preset
    publishPreset(id: ID!): Preset
  }

  type Preset {
    id: ID!
    published: Boolean!
    name: String!
    textType: String!
    description: String
    dateCreated: String!
    likes: Int!
    settings: String!
  }
`;

const resolvers: IResolvers = {
  Query: {
    presets: (_, __, ctx: Context) => {
      return ctx.prisma.presets.findMany({ where: { published: true } });
    },
    preset: (_, args, ctx: Context) => {
      return ctx.prisma.presets.findOne({
        where: { id: Number(args.id) }
      });
    }
  },
  Mutation: {
    createPreset: (_, args, ctx: Context) => {
      return ctx.prisma.presets.create({
        data: {
          name: args.name,
          textType: args.textType,
          settings: args.settings,
          description: args.description
        }
      });
    },
    deletePreset: (_, args, ctx: Context) => {
      return ctx.prisma.presets.delete({
        where: { id: Number(args.id) }
      });
    },
    publishPreset: (_, args, ctx: Context) => {
      return ctx.prisma.presets.update({
        where: { id: Number(args.id) },
        data: { published: true }
      });
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});
