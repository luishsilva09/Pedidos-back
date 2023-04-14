import joi from "joi";

export const newProductSchema = joi.object({
  tag: joi.string().trim().required(),
  image: joi.string().trim().required(),
  description: joi.string().trim().required(),
  price: joi.number().required().positive(),
});
