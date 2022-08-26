import { Milestone, Hill, curve } from "../lib";
import { scaleLinear } from "d3-scale";
import { compose, range, map } from "ramda";

function useScales(height: number, width: number) {
  const toX = scaleLinear().domain([0, 1]).range([0, width]);
  const toCurve = scaleLinear().domain([0, 1]).range([-1, 1]);
  const toY = scaleLinear().domain([0, 1]).range([height, 0]);

  const x = toX;
  const y = compose(toY, curve, toCurve);

  return {
    x,
    y,
  };
}

export function Demo() {
  const height = 300;
  const width = 600;

  const { x, y } = useScales(height, width);

  const numberOfPoints = 10;
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
            <Milestone centerPoint={point} radius={10} />
          ),
          output
        )}
      </svg>
    </div>
  );
}
