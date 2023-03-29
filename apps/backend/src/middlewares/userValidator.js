import { body, validationResult } from "express-validator";
import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../models/User.js";

export const validateCreateUser = [
  body("userId")
    .not()
    .isEmpty()
    .trim()
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.errors);
    if (!errors.isEmpty())
      return next(new ErrorHandler(errors.errors[0].msg, 400));
    next();
  },
];

export const validateUpdateUser = [
  body("nickName").not().isEmpty().trim().escape(),
  body("mobile").isLength({ min: 10, max: 10 }).not().trim().escape(),
  body("availableBalance").isNumeric().not().isEmpty().trim().escape(),
  body("address.*.fullName").not().isEmpty().trim().escape(),
  body("address.*.state").not().isEmpty().trim().escape(),
  body("address.*.city").not().isEmpty().trim().escape(),
  body("address.*.detailAddress").not().isEmpty().trim().escape(),
  body("address.*.mobileNumber")
    .isLength({ min: 10, max: 10 })
    .not()
    .trim()
    .escape(),
  body("address.*.pinCode").isLength({ min: 6, max: 6 }).not().trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.errors);
    if (!errors.isEmpty())
      return next(new ErrorHandler(errors.errors[0].msg, 400));
    next();
  },
];
