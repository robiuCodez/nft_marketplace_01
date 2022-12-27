import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  register: publicProcedure
    .input(
      z.object({
        email: z.string(),
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.create({
          data: {
            email: input.email,
            username: input.username,
            password: input.password,
          },
        });
      } catch (error) {
        console.error(`Error registering user : ${error}`);
      }
    }),
});
