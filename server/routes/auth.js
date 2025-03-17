// server/routes/auth.js
import express from "express";
import bcrypt from "bcrypt";
import { createUser, findUserByUsername } from "../models/user.js";

const router = express.Router();

// Registration endpoint
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user exists
    const existingUser = await findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, hashedPassword);
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    // For demo, return the user ID. In production, use JWT or sessions.
    res.json({ message: "Login successful!", userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
