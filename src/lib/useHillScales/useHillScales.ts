import { interpolateNumber } from "d3-interpolate";
import { ScaleLinear, scaleLinear } from "d3-scale";
import { useMemo } from "react";
import { curve } from "./curve";

interface Params {
  height: number;
  width: number;
}

export function useHillScales({ height, width }: Params) {
  const xScale = useMemo(() => {
    return scaleLinear().domain(INPUT_DOMAIN).range([0, width]);
  }, [width]);

  const yScale = useMemo(() => {
    const toCurve = scaleLinear().domain(INPUT_DOMAIN).range([-1, 1]);

    const interpolateCurve = (a: number, b: number) => {
      const baseInterpolate = interpolateNumber(a, b);
      return (t: number) => baseInterpolate(curve(toCurve(t)));
    };

    return scaleLinear()
      .domain([0, 1])
      .range([height, 0])
      .interpolate(interpolateCurve);
  }, [height]);

  return {
    x: xScale,
    y: yScale,
  };
}

const INPUT_DOMAIN = [0, 1];

export type XScale = ScaleLinear<number, number, never>;
export type YScale = ScaleLinear<number, number, never>;
