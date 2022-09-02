import { ReactNode } from "react";
import useResizeObserver from "use-resize-observer";
import { useDimensions } from "./useDimensions";

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
