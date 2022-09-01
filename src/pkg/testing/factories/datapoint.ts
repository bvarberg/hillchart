import { randomUniform } from "d3-random";
import { Factory } from "fishery";
import { Datapoint } from "../../../lib/structs/datapoint";

export const datapointFactory = Factory.define<Datapoint>(
  ({ afterBuild, params, sequence }) => {
    afterBuild(Datapoint.parse);

    const { id = String(sequence) } = params;

    return {
      id,
      label: `Test Datapoint (${id})`,
      progress: Number(buildRandomProgress().toPrecision(2)),
    };
  }
);

const buildRandomProgress = randomUniform(0, 1);
