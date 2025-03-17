// server/models/user.js
import pool from "../config/database.js";

// Create a new user
export const createUser = async (username, hashedPassword) => {
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
  const values = [username, hashedPassword];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Find a user by username
export const findUserByUsername = async (username) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  const values = [username];
  const result = await pool.query(query, values);
  return result.rows[0];
};
