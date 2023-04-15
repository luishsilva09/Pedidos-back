import joi from "joi";

export const newUserSchema = joi.object({
  name: joi.string().trim().required(),
  email: joi.string().email().trim().required(),
  password: joi.string().trim().required(),
  repeatPassword: joi.string().trim().required().valid(joi.ref("password")),
});

export const signinSchema = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().trim().required(),
});
