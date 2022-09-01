import { max, mergeDeepLeft } from "ramda";
import { ReactNode } from "react";
import useResizeObserver from "use-resize-observer";
import { z } from "zod";

interface Props {
  children?: ReactNode;
}

export function Canvas({ children }: Props) {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  const {
    dimensions: { overall, bounded, padding },
  } = useDimensions({
    container: {
      width,
      height,
    },
    padding: {},
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        maxHeight: "400px",
      }}
    >
      <svg
        height={overall.height}
        style={{
          backgroundColor: "#ccc",
        }}
        viewBox={`0 0 ${overall.width} ${overall.height}`}
        width={overall.width}
      >
        <g transform={`translate(${[padding.left, padding.top].join(",")})`}>
          <rect
            fill="#846fca"
            height={bounded.height}
            width={bounded.width}
          ></rect>
          {children}
        </g>
      </svg>
    </div>
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
      container: RectSize,
      padding: Padding.deepPartial(),
    })
  )
  .returns(
    z.object({
      dimensions: Dimensions,
    })
  );

const useDimensions = UseDimensions.implement(({ container, padding }) => {
  const p: z.infer<typeof Padding> = mergeDeepLeft(padding, {
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
        height: max(container.height - p.top - p.bottom, 0),
        width: max(container.width - p.left - p.right, 0),
      },
      padding: p,
    },
  };
});
