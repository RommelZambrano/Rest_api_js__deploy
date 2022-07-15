import { Schema, model } from "mongoose";

const providersSchema = new Schema(
  {
    name_provider: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Providers", providersSchema);
