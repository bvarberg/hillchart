import { z } from "zod";

export const Datapoint = z.object({
  progress: z.number().int().min(0).max(100),
  label: z.string(),
});

export type Datapoint = z.infer<typeof Datapoint>;
