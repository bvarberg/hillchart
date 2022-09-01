import { z } from "zod";
import { Datapoint } from "./datapoint";

export const Snapshot = z.object({
  captured: z.date(),
  data: z.array(Datapoint),
});

export type Snapshot = z.infer<typeof Snapshot>;
