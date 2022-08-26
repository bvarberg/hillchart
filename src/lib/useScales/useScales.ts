import { scaleLinear } from "d3-scale";
import { compose } from "ramda";
import { curve } from "./curve";

interface Options {
  height: number;
  width: number;
}

export function useScales({ height, width }: Options) {
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
