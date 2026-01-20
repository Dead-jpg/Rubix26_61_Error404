import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
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
    uses: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sketchfabUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

const Plant = mongoose.model("Plant", plantSchema);
export default Plant;
