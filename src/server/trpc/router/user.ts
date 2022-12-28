import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  // register new user
  register: publicProcedure
    .input(
      z.object({
        email: z.string().trim(),
        username: z.string().trim(),
        password: z.string().trim(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // console log
        console.log({
          email: input.email,
          username: input.username,
          password: input.password,
        });

        // create user
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

  // login user
  login: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findUnique({
      where: {
        // username: 
      }
    });
  }),

  // get all users
  getAllUsers: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.user.findMany({
        select: {
          id: true,
          username: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.error(`Error fetching users : ${error}`);
    }
  }),
});
