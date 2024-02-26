import { test, expect } from "@playwright/test";
import { quadraticEquation } from "../src/index";

test("1. Случаи вещественных корнеи", () => expect(quadraticEquation(2, -5, 2)).toMatchObject({ x1: 2, x2: 0.5 }));
test("2. Случаи комплексных корнеи", () => expect(quadraticEquation(3, 2, 5)).toMatchObject({ x1: NaN, x2: NaN }));
test("3. Нулевой корень", () => expect(quadraticEquation(3, -12, 0)).toMatchObject({ x1: 4, x2: 0 }));
test("4. Неразрешимое уравнение", () => expect(quadraticEquation(0, 0, 10)).toMatchObject({ x1: NaN, x2: NaN }));
test("5. Неразрешимое уравнение", () => expect(quadraticEquation(0, 0, 0)).toMatchObject({ x1: NaN, x2: NaN }));
test("6. Неквадратное уравнение", () => expect(quadraticEquation(0, 5, 17)).toMatchObject({ x1: NaN, x2: -Infinity }));
test("7. Нулевые корни", () => expect(quadraticEquation(9, 0, 0)).toMatchObject({ x1: 0, x2: -0 }));