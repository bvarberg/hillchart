interface Dimensions {
  height: number;
  width: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const combineChartDimensions = (dimensions: Dimensions) => {
  const {
    height,
    width,
    marginTop = 10,
    marginRight = 10,
    marginBottom = 40,
    marginLeft = 75,
  } = dimensions;

  return {
    ...dimensions,
    boundedHeight: Math.max(height - marginTop - marginBottom, 0),
    boundedWidth: Math.max(width - marginLeft - marginRight, 0),
  };
};
