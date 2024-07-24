import mongoose from "mongoose";
const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: DataView.now,
    },
  },
  { timestamps: true }
);

export const Notes = mongoose.model("Notes", notesSchema);
