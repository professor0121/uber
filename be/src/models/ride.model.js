import mongoose from "mongoose";

const rideSchema = new mongoose.Schema(
  {
    rider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    captain : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Captain",
    },

    pickupLocation: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },

    dropLocation: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },

    status: {
      type: String,
      enum: [
        "requested",
        "accepted",
        "ongoing",
        "completed",
        "cancelled",
      ],
      default: "requested",
    },

    fare: Number,

    distance: Number,
    duration: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Ride", rideSchema);