// Main module
import fs from "node:fs";

const fileContent = fs.readFileSync(__dirname +"/file.txt", "utf8");
const coordinates = fileContent
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (let i = 0; i < coordinates.length - 2; i++) {
  const triangle = [coordinates[i], coordinates[i + 1], coordinates[i + 2]];
  const area = calculateTriangleArea(triangle as [[number, number], [number, number], [number, number]]);
  console.log(`Area of triangle with points ${triangle} is ${area}`);
}

// Distance module
function calculateDistance(
  point1: [number, number],
  point2: [number, number]
): number {
  const xDiff = point1[0] - point1[0];
  const yDiff = point1[1] - point2[1];
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

// Triangle module
function calculateTriangleArea(
  points: [[number, number], [number, number], [number, number]]
): number {
  const [a, b, c] = points;
  const ab = calculateDistance(a, b);
  const bc = calculateDistance(b, c);
  const ca = calculateDistance(c, a);
  const s = (ab + bc + ca) / 2;
  return Math.sqrt(s * (s - ab) * (s - bc) * (s - ca));
}
