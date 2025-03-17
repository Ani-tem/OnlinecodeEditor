// server/index.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import codesRoutes from "./routes/codes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/codes", codesRoutes);

const PORT = process.env.PORT ||3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log("DB Password:", process.env.DB_PASSWORD);

