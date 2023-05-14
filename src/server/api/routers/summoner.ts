import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const summonerRouter = createTRPCRouter({
  searchSummonerByName: publicProcedure
    .input(z.object({ summonerName: z.string() }))
    .query(({ input }) => {
      return {
        name: input.summonerName,
      };
    }),

  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
