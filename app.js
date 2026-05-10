function isValidLogin(email, password) {
  return email.trim() !== "" && password.trim() !== "";
}

function isCorrectOwnerLogin(email, password) {
  return email === "owner@trafix.com" && password === "123456";
}

function isValidViolationCategory(category) {
  return category.name.trim() !== "" && category.fine.trim() !== "";
}

function isValidNotification(notification) {
  return notification.title.trim() !== "" && notification.date.trim() !== "";
}

module.exports = {
  isValidLogin,
  isCorrectOwnerLogin,
  isValidViolationCategory,
  isValidNotification
};
