// import { prisma } from "../prisma";
import { publicProcedure, router } from "../trpc";

export const postRouter = router({
  test: publicProcedure.query(async () => {
    return { message: "test2" };
  }),
});
