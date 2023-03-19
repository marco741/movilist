import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
// import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  icon: protectedProcedure.query(async ({ ctx }) => {
    const avatar = await createAvatar(lorelei, {
      seed: ctx.session.user.name ?? "",
    }).toDataUri();
    return {
      avatar,
    };
  }),
});
