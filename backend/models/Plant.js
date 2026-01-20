import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    /* BASIC INFO (already used by frontend) */
    name: {
      type: String,
      required: true,
    },
    scientificName: {
      type: String,
      required: true,
    },
    ayushSystem: {
      type: String,
      required: true,
    },

    /* SHORT USE (card + preview) */
    uses: {
      type: String,
      required: true,
    },

    /* 🌿 NEW — DETAILED CONTENT */
    detailedDescription: {
      type: String,
      required: true,
    },
    medicinalBenefits: {
      type: String,
      required: true,
    },
    precautions: {
      type: String,
      required: true,
    },
    partsUsed: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },

    /* MEDIA */
    image: {
      type: String,
      required: true,
    },
    sketchfabUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Plant = mongoose.model("Plant", plantSchema);
export default Plant;

