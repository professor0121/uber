import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Captain",
  },

  type: {
    type: String,
    enum: ["bike", "auto", "car"],
  },

  model: String,
  numberPlate: { type: String, unique: true },
  color: String,
});

export default mongoose.model("Vehicle", vehicleSchema);