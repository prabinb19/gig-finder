const db = require("../config/db-config.js");
const bcrypt = require("bcrypt");

const {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidRole,
  isValidPhoneNumber
} = require("../utils/validation");

async function createUser({
  email,
  password,
  first_name,
  last_name,
  phone_number,
  role
}) {
  if (!isValidEmail(email)) {
    throw { msg: "Invalid email address", status: 400 };
  }

  if (!isValidPassword(password)) {
    throw {
      msg: "Password should be at least six characters and have at least one number",
      status: 400,
    };
  }

  if (!isValidRole(role)) {
    throw { msg: "Unrecognized role selected", status: 400 };
  }

  if (!isValidName(first_name)) {
    throw { msg: "Please enter a valid first name", status: 400 };
  }

  if (!isValidName(last_name)) {
    throw { msg: "Please enter a valid last name", status: 400 };
  }

  if(!isValidPhoneNumber(phone_number)){
    throw {msg :  "Please enter a valid phone number", status : 400}
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await db.query(
    "INSERT INTO users (first_name, last_name, email, password_hash, role, phone_number) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      first_name,
      last_name,
      email,
      hashedPassword,
      !!role,
      phone_number
    ]
  );
}


module.exports = {
  createUser,
};
