import { map } from "ramda";
import { useChartDimensions } from "../../../pkg/wattenberger";
import type { Snapshot } from "../../structs/snapshot";
import { useHillScales } from "../../useHillScales";
import { Hill } from "../Hill";
import { Milestone } from "../Milestone";
import { Canvas } from "./Canvas";

interface Props {
  snapshot: Snapshot;
}

export function HillChart({ snapshot: snapshot }: Props) {
  const [ref, dimensions] = useChartDimensions({
    height: 400,
    width: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
  });

  const { x, y } = useHillScales({
    height: dimensions.boundedHeight,
    width: dimensions.boundedWidth,
  });

  return (
    <Canvas dimensions={dimensions}>
      <Hill x={x} y={y} />
      {map(
        (datapoint) => (
          <Milestone
            key={datapoint.id}
            centerPoint={{
              x: x(datapoint.progress),
              y: y(datapoint.progress),
            }}
            radius={5}
          />
        ),
        snapshot.data
      )}
    </Canvas>
  );
}
