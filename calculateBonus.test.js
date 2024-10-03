const calculateBonus = require("./calculateBonus");

test("Bonus is 50 when sum of a and b  exactly equal to 50", () => {
  expect(calculateBonus(24, 26)).toBe(50);
});

test("Bonus is still 50 when sum of a and b more than 50", () => {
  expect(calculateBonus(25, 26)).toBe(50);
});

test("Bonus equlas the sum of a and b when this sum is less 50", () => {
  expect(calculateBonus(25, 24)).toBe(49);
});

test("Bonus is 0 when this sum of a and b equals to 0", () => {
  expect(calculateBonus(-10, 10)).toBe(0);
});

test("Bonus is negative when sum of a and b is negative", () => {
  expect(calculateBonus(-10, -10)).toBe(-20);
});
