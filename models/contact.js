import { Schema, model } from "mongoose";
import Joi from "joi";

import { handleMongooseError } from "../utils/index.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name must be exist"],
    },
    phoneNumber: {
      type: String,
      required: [true, "phoneNumber must be exist"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required`,
  }),
  phoneNumber: Joi.string().required().messages({
    "any.required": `"phoneNumber" is required`,
    "string.empty": `"phoneNumber" cannot be empty`,
    "string.base": `"phoneNumber" must be string`,
  }),
});

export const contactSchemas = {
  addSchema,
};

export const Contact = model("contact", contactSchema);
