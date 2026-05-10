const {
  isValidLogin,
  isCorrectOwnerLogin,
  isValidViolationCategory,
  isValidNotification
} = require("../app");

test("login should fail when email is empty", () => {
  expect(isValidLogin("", "123456")).toBe(false);
});

test("login should pass when email and password are provided", () => {
  expect(isValidLogin("owner@trafix.com", "123456")).toBe(true);
});

test("owner login should pass with correct credentials", () => {
  expect(isCorrectOwnerLogin("owner@trafix.com", "123456")).toBe(true);
});

test("violation category should be valid when name and fine exist", () => {
  const category = {
    name: "Speeding",
    fine: "50 USD"
  };

  expect(isValidViolationCategory(category)).toBe(true);
});

test("notification should be valid when title and date exist", () => {
  const notification = {
    title: "New Violation Issued",
    date: "2026-05-10"
  };

  expect(isValidNotification(notification)).toBe(true);
});
