import { ReactNode } from "react";

interface Props {
  dimensions: {
    height: number;
    width: number;
    marginLeft: number;
    marginTop: number;
  };
  children?: ReactNode;
}

export function Canvas({ dimensions, children }: Props) {
  const { height, width, marginLeft, marginTop } = dimensions;

  return (
    <svg
      height={height}
      style={{
        backgroundColor: "#ccc",
      }}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <g transform={`translate(${[marginLeft, marginTop].join(",")})`}>
        {children}
      </g>
    </svg>
  );
}
