import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import plantRoutes from "./routes/plantRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // MUST be before mongoose.connect()

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Routes
app.use("/api/plants", plantRoutes);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
