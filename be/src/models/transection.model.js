import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    amount: Number,

    type: {
      type: String,
      enum: ["credit", "debit"],
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);