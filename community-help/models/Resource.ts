import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    category: {
      type: String,
      enum: ["food", "housing", "jobs", "transportation", "taxes", "healthcare"],
      required: true,
    },

    description: String,

    address: String,
    city: String,
    state: String,
    zipCode: String,

    phone: String,
    website: String,

    languages: [String],

    source: {
      type: String,
      default: "community",
    },

    verified: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Resource ||
  mongoose.model("Resource", ResourceSchema);