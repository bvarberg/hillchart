// import ResizeObserver from "@juggle/resize-observer";
import { useEffect, useRef, useState } from "react";
import { combineChartDimensions } from "./combineChartDimensions";

type UseChartDimensionsParams = {
  height: number;
  width: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};

export const useChartDimensions = (params: UseChartDimensionsParams) => {
  const ref = useRef<Element>();
  const dimensions = combineChartDimensions(params);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  // useEffect(() => {
  //   if (dimensions.width && dimensions.height) return [ref, dimensions];
  //   const element = ref.current;
  //   const resizeObserver = new ResizeObserver((entries) => {
  //     if (!Array.isArray(entries)) return;
  //     if (!entries.length) return;
  //     const entry = entries[0];
  //     if (width != entry.contentRect.width) setWidth(entry.contentRect.width);
  //     if (height != entry.contentRect.height)
  //       setHeight(entry.contentRect.height);
  //   });
  //   resizeObserver.observe(element);
  //   return () => {
  //     resizeObserver.unobserve(element);
  //   };
  // }, []);

  const newSettings = combineChartDimensions({
    ...dimensions,
    width: dimensions.width || width,
    height: dimensions.height || height,
  });

  return [ref, newSettings] as const;
};
