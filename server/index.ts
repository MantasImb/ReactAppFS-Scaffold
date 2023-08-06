import { userRouter } from "./routers/userRouter";
import { postRouter } from "./routers/postRouter";
import { router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";

const appRouter = router({
  user: userRouter, // put procedures under "user" namespace
  post: postRouter, // put procedures under "post" namespace
});

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
