import { createTRPCRouter } from "~/server/api/trpc";
import { summonerRouter } from "~/server/api/routers/summoner";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  summoner: summonerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
