const isTaken = require("./Goban");

test("Select Postion 0, 0 is false", () => {
  expect(isTaken(0, 0)).toBe(false);
});

test("Select Postion 0, 1 is false", () => {
  expect(isTaken(0, 1)).toBe(false);
});

test("Select Postion 0, 2 is NULL", () => {
  expect(isTaken(0, 2)).toBe("Position empty - choose another");
});

test("Select Postion 1, 0 is True", () => {
  expect(isTaken(1, 0)).toBe(true);
});

test("Select Postion 1, 1 is True", () => {
  expect(isTaken(1, 1)).toBe(true);
});

test("Select Postion 1, 2 is False", () => {
  expect(isTaken(1, 2)).toBe(false);
});

test("Select Postion 2, 0 is False", () => {
  expect(isTaken(2, 0)).toBe(false);
});

test("Select Postion 2, 1 is False", () => {
  expect(isTaken(2, 1)).toBe(false);
});

test("Select Postion 2, 2 is NULL", () => {
  expect(isTaken(2, 2)).toBe("Position empty - choose another");
});