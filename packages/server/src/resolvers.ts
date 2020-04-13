import { IResolvers } from "graphql-tools";
import { customAlphabet, nanoid } from "nanoid";
import bcrypt from "bcrypt";

import { Context } from "./context";

const resolvers: IResolvers = {
  Query: {
    presets: (_, args, ctx: Context) => {
      return ctx.prisma.preset.findMany({
        where: { published: args.published }
      });
    },
    preset: (_, args, ctx: Context) => {
      if (args.id) {
        return ctx.prisma.preset.findOne({
          where: { id: Number(args.id) }
        });
      } else if (args.shortId) {
        return ctx.prisma.preset.findOne({
          where: { shortId: args.shortId }
        });
      }

      return null;
    }
  },
  Mutation: {
    createPreset: (_, args, ctx: Context) => {
      return ctx.prisma.preset.create({
        data: {
          textType: args.textType,
          settings: args.settings
        }
      });
    },
    deletePreset: (_, args, ctx: Context) => {
      return ctx.prisma.preset.delete({
        where: { id: Number(args.id) }
      });
    },
    publishPreset: (_, args, ctx: Context) => {
      const customId = customAlphabet(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        6
      );

      const shortId = customId();

      return ctx.prisma.preset.update({
        where: { id: Number(args.id) },
        data: { published: true, shortId }
      });
    },
    unpublishPreset: (_, args, ctx: Context) => {
      return ctx.prisma.preset.update({
        where: { id: Number(args.id) },
        data: { published: false }
      });
    },

    likePreset: (_, args, ctx: Context) => {
      return ctx.prisma.preset.update({
        where: { id: Number(args.id) },
        data: { likes: args.likes + 1 }
      });
    },
    unlikePreset: (_, args, ctx: Context) => {
      return ctx.prisma.preset.update({
        where: { id: Number(args.id) },
        data: { likes: args.likes - 1 }
      });
    },

    login: async (_, args, ctx: Context) => {
      const user = await ctx.prisma.user.findOne({
        where: { username: args.username }
      });

      if (!user) {
        // Return error, username not found
        return null;
      }

      const isValid = await bcrypt.compare(args.password, user.password);

      if (!isValid) {
        // Wrong password
        return null;
      }

      return {
        username: user.username,
        email: user.email,
        id: user.id,
        token: nanoid()
      };
    }
  }
};

export default resolvers;
