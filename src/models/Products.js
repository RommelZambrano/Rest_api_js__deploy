import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name_product: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    provider_ID: {
      type: Schema.Types.ObjectId,
      ref: "Providers",
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    total: {
      type: Number,
      required: true,
      default: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Products", productsSchema);
