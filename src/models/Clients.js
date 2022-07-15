import { Schema, model } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const clientsSchema = new Schema(
  {
    name_client: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    CI: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

clientsSchema.plugin(uniqueValidator);
export default model("Clients", clientsSchema);
