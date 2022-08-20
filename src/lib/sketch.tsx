import { scaleLinear } from "d3-scale";
import { compose } from "ramda";

const width = 1200;
const height = 600;

const toX = scaleLinear().domain([0, 1]).rangeRound([0, width]);

/**
 * A basic curve.
 * @param x - [-1, 1]
 * @returns A y value, between [0, 1]
 */
const curve = (x: number) => Math.pow(1 - Math.pow(x, 2), 2);
const toCurve = scaleLinear().domain([0, 1]).range([-1, 1]);
const toY = scaleLinear().domain([0, 1]).rangeRound([0, height]);

export const xScale = toX;
export const yScale = compose(toY, curve, toCurve);

// [0, 1] => [0, width]
// [0, 1] => [-1, 1] =(curve)=> [0, 1] => [0, height]

const input = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
const output = input.map((n) => {
  return [xScale(n), yScale(n)];
});

console.log(output);
