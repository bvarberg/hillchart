import { line } from "d3-shape";
import { map, range } from "ramda";
import type { XScale, YScale } from "../../useHillScales";

const fidelity = 100;
const xValues = map((n) => n / fidelity, range(0, fidelity + 1));

interface Props {
  x: XScale;
  y: YScale;
}

export function Hill({ x, y }: Props) {
  const lineGenerator = line<number>().x(x).y(y);
  const path = lineGenerator(xValues);

  return path ? <path d={path} fill="none" stroke="#848484" /> : null;
}
