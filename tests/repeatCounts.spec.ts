import { test, expect } from "@playwright/test";
import { repeatCounts } from "../src/repeatCounts";

test("Строки", () => {
  test.step("", () => {
    expect(repeatCounts("aвц", "a"), 'авц с поиском "а"').toBe(1);
  });
  test.step("", () => {
    expect(repeatCounts("стстсап", "стс")).toBe(2);
  });
  test.step("", () => {
    expect(repeatCounts("aбвгабвг", "аб")).toBe(1);
  });
  test.step("", () => {
    expect(repeatCounts("абвгабв", "абв")).toBe(2);
  });
  test.step("", () => {
    expect(repeatCounts("aбвгабвг", "аб"), "1 символ на английском").toBe(2);
  });
});
