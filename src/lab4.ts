/*
  Лабораторная работа No4
  Обычные try/catch/finally.
 */

try {
  throw new Error("test");
} catch (error) {
  console.log(error);

  try {
    throw new TypeError("Incorrect type");
  } catch (error) {
    console.log(error);
  }
} finally {
  console.log("finally");
}
