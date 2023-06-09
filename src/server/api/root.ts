import { createTRPCRouter } from '~/server/api/trpc';
import { exampleRouter } from '~/server/api/routers/example';
import { authRouter } from './routers/auth';
import { userRouter } from './routers/user';
import { carouselRouter } from './routers/carosel';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
  user: userRouter,
  carousel: carouselRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
