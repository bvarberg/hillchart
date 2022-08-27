interface Dimensions {
  height: number;
  width: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const combineChartDimensions = ({
  height,
  width,
  marginTop = 10,
  marginRight = 10,
  marginBottom = 10,
  marginLeft = 10,
}: Dimensions) => {
  return {
    height,
    width,
    boundedHeight: Math.max(height - marginTop - marginBottom, 0),
    boundedWidth: Math.max(width - marginLeft - marginRight, 0),
    marginTop,
    marginLeft,
    marginBottom,
    marginRight,
  };
};
