import { createCallerFactory, createTRPCRouter } from "../../server/api/trpc";
import { favoritesRouter } from "./routers/favorites";
import { ratingsRouter } from "./routers/rating";
import { loggingRouter } from "./routers/logging";
import { progressRouter } from "./routers/progress";
import { accountsRouter } from "./routers/accounts";
import { giftCodesRouter } from "./routers/gift-codes";
import { leaderboardRouter } from "./routers/leaderboard";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  favorites: favoritesRouter,
  ratings: ratingsRouter,
  logging: loggingRouter,
  progress: progressRouter,
  accounts: accountsRouter,
  giftCodes: giftCodesRouter,
  leaderboard: leaderboardRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
