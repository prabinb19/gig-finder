const db = require("../config/db-config.js");
const bcrypt = require("bcrypt");

const {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhoneNumber
} = require("../utils/validation");

async function createUser({
  email,
  password,
  first_name,
  last_name,
  phone_number
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
    "INSERT INTO users (first_name, last_name, email, password_hash, phone_number) VALUES ($1, $2, $3, $4, $5)",
    [
      first_name,
      last_name,
      email,
      hashedPassword,
      phone_number
    ]
  );
}

async function findByEmail({ email }) {
  if (!isValidEmail(email)) {
    throw { msg: "Invalid email address", status: 400 };
  }

  return await db.oneOrNone("SELECT * FROM users WHERE email = $1", email);
}
async function findByID({ id }) {
  return await db.oneOrNone("SELECT * FROM users WHERE id = $1", id);
}

async function getUserData({ id }) {
  retrieved_data = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [
    id,
  ]);

  return retrieved_data;
}

module.exports = {
  createUser,
  findByID,
  findByEmail
};
