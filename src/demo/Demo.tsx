import { useScales, Milestone, Hill, curve } from "../lib";
import { range, map } from "ramda";

export function Demo() {
  const height = 300;
  const width = 600;

  const { x, y } = useScales({ height, width });

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
        stroke="#484848"
      >
        <rect width={width} height={height} fill="#cccccc"></rect>
        <Hill x={x} y={y} />
        {map(
          (point) => (
            <Milestone key={point.x} centerPoint={point} radius={10} />
          ),
          output
        )}
      </svg>
    </div>
  );
}
