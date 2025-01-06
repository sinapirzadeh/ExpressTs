import { check } from "express-validator";

const userValidation = () => {
  return [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Please enter a valid email"),
  ];
};

export default userValidation;
