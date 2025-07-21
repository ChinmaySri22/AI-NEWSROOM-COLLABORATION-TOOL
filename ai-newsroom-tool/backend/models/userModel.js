const pool = require('../config/db');

/**
 * Find a user by email address
 * @param {string} email - The email address to search for
 * @returns {Promise<Object|null>} - User object or null if not found
 */
const findUserByEmail = async (email) => {
  try {
    const query = 'SELECT id, username, email, password_hash, role, created_at FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    return result.rows[0];
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
};

/**
 * Create a new user in the database
 * @param {string} username - The username
 * @param {string} email - The email address
 * @param {string} passwordHash - The hashed password
 * @param {string} role - The user role (default: 'writer')
 * @returns {Promise<Object>} - Object containing the new user's ID and role
 */
const createUser = async (username, email, passwordHash, role = 'writer') => {
  try {
    const query = `
      INSERT INTO users (username, email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id, role
    `;
    
    const result = await pool.query(query, [username, email, passwordHash, role]);
    
    return {
      id: result.rows[0].id,
      role: result.rows[0].role
    };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

/**
 * Find a user by username
 * @param {string} username - The username to search for
 * @returns {Promise<Object|null>} - User object or null if not found
 */
const findUserByUsername = async (username) => {
  try {
    const query = 'SELECT id, username, email, password_hash, role, created_at FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    return result.rows[0];
  } catch (error) {
    console.error('Error finding user by username:', error);
    throw error;
  }
};

/**
 * Get all users (for admin purposes)
 * @returns {Promise<Array>} - Array of user objects
 */
const getAllUsers = async () => {
  try {
    const query = 'SELECT id, username, email, role, created_at FROM users ORDER BY created_at DESC';
    const result = await pool.query(query);
    
    return result.rows;
  } catch (error) {
    console.error('Error getting all users:', error);
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  createUser,
  findUserByUsername,
  getAllUsers
}; 