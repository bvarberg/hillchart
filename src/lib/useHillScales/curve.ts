/**
 * A basic curve.
 * @param x A x value, between [-1, 1]
 * @returns A y value, between [0, vertex]
 */
export function curve(x: number): number {
  const vertex = 7 / 8;
  return vertex * Math.pow(1 - Math.pow(x, 2), 2);
}
