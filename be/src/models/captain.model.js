import mongoose from "mongoose";

const captainSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    licenseNumber: { type: String, required: true },

    isOnline: { type: Boolean, default: false },

    currentLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [lng, lat]
        index: "2dsphere",
      },
    },

    rating: { type: Number, default: 5 },

    totalRides: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Captain= mongoose.model("Captain", captainSchema);
export default Captain;