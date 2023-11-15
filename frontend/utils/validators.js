export function isNameValid(f_name) {
  const pattern = /^[\s\S]+$/;

  return pattern.test(f_name) && f_name.length >= 2;
}

export function isLongNameValid(name) {
  const pattern = /^[\s\S]+$/;
  return pattern.test(name) && name?.length >= 2;
}

export function isUsmIDValid(id) {
  const pattern = /^\d{8}$/;

  // Check if the input matches the pattern
  return pattern.test(id);
}

export function isValidPhoneNumber(phoneNumber) {
  // Define a regular expression pattern for a U.S. phone number
  const pattern = /^\d{10}$/; // Matches exactly 10 digits

  // Use the test() method to check if the phoneNumber matches the pattern
  return pattern.test(phoneNumber);
}

export function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email validation regex
  return emailRegex.test(email);
}

export function isValidPassword(password) {
  // Check if the password is at least 6 characters long
  if (password.length < 6) {
    return false;
  }

