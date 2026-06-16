import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    category: { type: String, required: true },

    description: String,

    address: String,
    city: String,
    state: String,
    zipCode: String,

    phone: String,
    website: String,

    languages: [String],

    // 🆕 IMPORTANT FIELD YOU REQUESTED
    purpose: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Submission ||
  mongoose.model("Submission", SubmissionSchema);