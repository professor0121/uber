import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    ride: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
    },

    rider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    captain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Captain",
    },

    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);