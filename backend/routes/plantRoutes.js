import express from "express";
import Plant from "../models/Plant.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ GET all plants (PUBLIC)
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET single plant by ID (PUBLIC)
router.get("/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    res.json(plant);
  } catch (error) {
    res.status(404).json({ message: "Plant not found" });
  }
});

// 🔐 ADD new plant (PROTECTED)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const plant = new Plant(req.body);
    const savedPlant = await plant.save();
    res.status(201).json(savedPlant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  console.log(req.body);
});

export default router;
