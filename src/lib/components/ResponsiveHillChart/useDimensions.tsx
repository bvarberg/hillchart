import { max, mergeDeepLeft } from "ramda";
import { z } from "zod";

const Padding = z.object({
  top: z.number(),
  left: z.number(),
  bottom: z.number(),
  right: z.number(),
});

const RectSize = z.object({
  width: z.number(),
  height: z.number(),
});

const Dimensions = z.object({
  overall: RectSize,
  bounded: RectSize,
  padding: Padding,
});

const UseDimensions = z
  .function()
  .args(
    z.object({
      container: RectSize,
      padding: Padding.deepPartial().optional(),
    })
  )
  .returns(
    z.object({
      dimensions: Dimensions,
    })
  );

export const useDimensions = UseDimensions.implement(
  ({ container, padding = {} }) => {
    const pad = mergeDeepLeft(padding, {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10,
    });

    return {
      dimensions: {
        overall: {
          height: container.height,
          width: container.width,
        },
        bounded: {
          height: max(container.height - pad.top - pad.bottom, 0),
          width: max(container.width - pad.left - pad.right, 0),
        },
        padding: pad,
      },
    };
  }
);
