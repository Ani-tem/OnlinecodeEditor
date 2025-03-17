// server/models/code.js
import pool from "../config/database.js";

// Create a new code snippet for a user
export const createCodeSnippet = async (userId, title, language, codeContent) => {
  const query = 'INSERT INTO codes (user_id, title, language, content) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [userId, title, language, codeContent];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Retrieve all code snippets for a user
export const getCodesByUserId = async (userId) => {
  const query = 'SELECT * FROM codes WHERE user_id = $1 ORDER BY created_at DESC';
  const values = [userId];
  const result = await pool.query(query, values);
  return result.rows;
};
