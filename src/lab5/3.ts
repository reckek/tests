/*
  Лабораторная работа No5/3
  Программа для проверки типа треугольника.
  Результаты вычислений выведены в консоль.
 */

function checkTriangleType(
  a: number,
  b: number,
  c: number
): "равносторонний" | "равнобедренный" | "прямоугольный" | "тупой" {
  if (a === b && b === c) {
    return "равносторонний";
  } else if (a === b || a === c || b === c) {
    return "равнобедренный";
  } else if (
    a * a + b * b === c * c ||
    b * b + c * c === a * a ||
    c * c + a * a === b * b
  ) {
    return "прямоугольный";
  }

  return "тупой";
}

console.log("1. ", "Является тупым", [3, 4, 5], checkTriangleType(3, 4, 5), checkTriangleType(3, 4, 5) === "тупой");
console.log("2. ", "Является равносторонним", [1, 1, 1], checkTriangleType(1, 1, 1), checkTriangleType(1, 1, 1) === "равносторонний");
console.log("3. ", "Является равнобедренным", [3, 4, 5], checkTriangleType(3, 4, 5), checkTriangleType(3, 4, 5) === "равнобедренный");
console.log("4. ", "Является прямоугольным", [3, 4, 5], checkTriangleType(3, 4, 5)), checkTriangleType(3, 4, 5) === "прямоугольный";
