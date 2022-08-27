import { interpolateNumber } from "d3-interpolate";
import { scaleLinear } from "d3-scale";
import { useMemo } from "react";
import { curve } from "./curve";

interface Params {
  height: number;
  width: number;
}

export function useScales({ height, width }: Params) {
  const xScale = useMemo(() => {
    return scaleLinear().domain([0, 1]).range([0, width]);
  }, [width]);

  const yScale = useMemo(() => {
    const toCurve = scaleLinear().domain([0, 1]).range([-1, 1]);

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
