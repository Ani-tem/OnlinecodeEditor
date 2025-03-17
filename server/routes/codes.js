// server/routes/codes.js
import express from "express";
import { createCodeSnippet, getCodesByUserId } from "../models/code.js";

const router = express.Router();

// Helper: extract userId from headers (for demo purposes)
const getUserId = (req) => req.headers["userid"];

// Create a new code snippet
router.post("/create", async (req, res) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized: user id missing" });
  
  const { title, language, codeContent } = req.body;
  try {
    const codeSnippet = await createCodeSnippet(userId, title, language, codeContent);
    res.status(201).json({ message: "Code snippet saved successfully!", codeSnippet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save code snippet" });
  }
});

// Retrieve all code snippets for the user
router.get("/user", async (req, res) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized: user id missing" });
  try {
    const codes = await getCodesByUserId(userId);
    res.json({ codes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch code snippets" });
  }
});

export default router;
