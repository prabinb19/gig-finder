const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/; // Alphanumeric, minimum six characters, starts with a letter
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email validation regex

function isValidUsername(username) {
  return usernameRegex.test(username);
}

function isValidEmail(email) {
  return emailRegex.test(email);
}


function isValidPassword(password) {
  // Check if the password is at least 6 characters long
  if (password.length < 6) {
    return false;
  }

  // Use regular expressions to check for at least one letter and one number
  const letterPattern = /[a-zA-Z]/;
  const numberPattern = /[0-9]/;
  return letterPattern.test(password) && numberPattern.test(password);
}

function isValidName(f_name) {
  const pattern = /^[\s\S]+$/;
  return pattern.test(f_name) && f_name?.length >= 2;
}

function isUsmIDValid(id) {
  const pattern = /^\d{8}$/;
  return pattern.test(id);
}

function isValidPhoneNumber(phoneNumber) {
  // Define a regular expression pattern for a U.S. phone number
  const pattern = /^\d{10}$/; // Matches exactly 10 digits

  // Use the test() method to check if the phoneNumber matches the pattern
  return pattern.test(phoneNumber);
}


function isValidISODate(dateString) {
  // Attempt to parse the input string as a date
  const date = new Date(dateString);

  // Check if the parsed date is not 'Invalid Date'
  // and the input string matches the date string (to prevent partial matches)
  return (
    date.toString() !== "Invalid Date" && date.toISOString() === dateString
  );
}

function isValidRole(role) {
  //Role is valid only if true or false. True for hustler, False for users
  if(role !== true || role !== false) return false;
  return true;
}
module.exports = {
  isValidEmail,
  isValidUsername,
  isValidPassword,
  isValidName,
  isUsmIDValid,
  isValidPhoneNumber,
  isValidISODate,
  isValidRole,
};
