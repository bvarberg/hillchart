import { max, mergeDeepLeft } from "ramda";
import { ReactNode } from "react";
import { z } from "zod";

interface Props {
  children?: ReactNode;
}

export function Canvas({ children }: Props) {
  const {
    dimensions: { overall, padding },
  } = useDimensions({
    padding: {},
  });

  return (
    <svg
      height={overall.height}
      style={{
        backgroundColor: "#ccc",
      }}
      viewBox={`0 0 ${overall.width} ${overall.height}`}
      width={overall.width}
    >
      <g transform={`translate(${[padding.left, padding.top].join(",")})`}>
        {children}
      </g>
    </svg>
  );
}

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
      padding: Padding.deepPartial(),
    })
  )
  .returns(
    z.object({
      dimensions: Dimensions,
    })
  );

const useDimensions = UseDimensions.implement(({ padding }) => {
  const p: z.infer<typeof Padding> = mergeDeepLeft(padding, {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  });

  const height = 300;
  const width = 600;

  return {
    dimensions: {
      overall: {
        height,
        width,
      },
      bounded: {
        height: max(height - p.top - p.bottom, 0),
        width: max(width - p.left - p.right, 0),
      },
      padding: p,
    },
  };
});
