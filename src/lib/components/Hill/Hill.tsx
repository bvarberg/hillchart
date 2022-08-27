import { line } from "d3-shape";
import { map, range } from "ramda";

const fidelity = 100;
const xValues = map((n) => n / fidelity, range(0, fidelity + 1));

interface Point {
  x: number;
  y: number;
}

interface Props {
  x: (d: number) => Point["x"];
  y: (d: number) => Point["y"];
}

export function Hill(props: Props) {
  const { x, y } = props;

  const lineGenerator = line<number>().x(x).y(y);
  const path = lineGenerator(xValues);

  return path ? <path d={path} fill="none" stroke="#848484" /> : null;
}
