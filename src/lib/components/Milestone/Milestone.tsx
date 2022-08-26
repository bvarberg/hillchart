interface Point {
  x: number;
  y: number;
}

interface Props {
  centerPoint: Point;
  radius: number;
}

export function Milestone(props: Props) {
  const { centerPoint, radius } = props;

  return (
    <circle cx={centerPoint.x} cy={centerPoint.y} r={radius} fill="#848484" />
  );
}
