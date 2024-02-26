/**
 * @description
 * Calculate value of the quadratic equation.
 * Formula: ab^2 + bc + c = 0
 * 
 * @param a
 * @param b
 * @param c
 * @returns result
 */
export const quadraticEquation = (a: number, b: number, c: number) => {
  const d = Math.pow(b, 2) - 4 * a * c;
  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);
  console.log(x1, x2);
  return { x1, x2 };
}
