import { Factory } from "fishery";
import { Snapshot } from "../../../lib/structs/snapshot";
import { datapointFactory } from "./datapoint";

export const snapshotFactory = Factory.define<Snapshot>(({ afterBuild }) => {
  afterBuild(Snapshot.parse);

  const now = new Date();

  return {
    capturedAt: now,
    data: datapointFactory.buildList(3),
  };
});
