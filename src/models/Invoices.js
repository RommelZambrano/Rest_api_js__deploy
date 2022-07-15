import { Schema, model } from "mongoose";

const invoicesSchema = new Schema(
  {
    client_ID: {
      type: Schema.Types.ObjectId,
      ref: "Clients",
    },
    product_ID: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    subtotal: {
      type: Number,
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

export default model("Invoices", invoicesSchema);
