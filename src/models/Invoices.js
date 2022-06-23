import { Schema, model } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const invoicesSchema = new Schema(
  {
    name: {
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
    products: {
      type: String,
      required: true,
      trim: true,
    },
    IVA: {
      type: Number,
      required: true,
      trim: true,
    },
    total: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

usersSchema.plugin(uniqueValidator);
export default model("Invoices", invoicesSchema);
