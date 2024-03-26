/*
  Лабораторная работа No5/4
  Программа для вычисления корней квадратного уравнения.
 */

function solveQuadraticEquation(a: number, b: number, c: number): number[] {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    return [];
  }
}

console.log("1.", "Два корня" , [ 1, -3, 2 ], solveQuadraticEquation(1, -3, 2), solveQuadraticEquation(1, -3, 2).length === 2);
console.log("2.", "Один корень" , [1, -2, 1], solveQuadraticEquation(1, -2, 1), solveQuadraticEquation(1, -2, 1).length === 1);
console.log("3.", "Нет корней" , [1, 2, 3], solveQuadraticEquation(1, 2, 3), solveQuadraticEquation(1, 2, 3).length === 0);
console.log("4.", "Не удалось вычислить корень", [0, 0, 0], solveQuadraticEquation(0, 0, 0), Number.isNaN(solveQuadraticEquation(0, 0, 0)[0]));