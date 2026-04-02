import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    ride: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
    },

    amount: Number,

    method: {
      type: String,
      enum: ["cash", "card", "upi", "wallet"],
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    transactionId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);