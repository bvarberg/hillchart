import { useScales, Milestone, Hill } from "../lib";
import { range, map } from "ramda";
import { useChartDimensions } from "../pkg/wattenberger";

export function Demo() {
  const [ref, dimensions] = useChartDimensions({
    height: 600,
    width: 1200,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
  });

  const { height, width, boundedHeight, boundedWidth } = dimensions;

  const { x, y } = useScales({ height: boundedHeight, width: boundedWidth });

  const numberOfPoints = 3;
  const input = map((n) => n / numberOfPoints, range(0, numberOfPoints + 1));
  const output = map(
    (n) => ({
      x: x(n),
      y: y(n),
    }),
    input
  );

  return (
    <div>
      <code>{JSON.stringify(output, null, 2)}</code>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          backgroundColor: "#ccc",
        }}
      >
        <g
          transform={`translate(${[
            dimensions.marginLeft,
            dimensions.marginTop,
          ].join(",")})`}
        >
          <Hill x={x} y={y} />
          {map(
            (point) => (
              <Milestone key={point.x} centerPoint={point} radius={10} />
            ),
            output
          )}
        </g>
      </svg>
    </div>
  );
}
