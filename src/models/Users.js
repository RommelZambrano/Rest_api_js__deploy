import { Schema, model } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = new Schema(
  {
    name_user: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

usersSchema.plugin(uniqueValidator);
export default model("Users", usersSchema);
