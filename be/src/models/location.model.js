import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Captain",
  },

  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },

  updatedAt: { type: Date, default: Date.now },
});

const Location = mongoose.model("Location", locationSchema);
export default Location;