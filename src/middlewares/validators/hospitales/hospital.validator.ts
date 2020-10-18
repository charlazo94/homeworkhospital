import { body } from "express-validator";

const validations = [
  body("name").exists().withMessage("Nombre Requerido"),
  body("name")
    .if(body("name").exists())
    .isLength({ min: 9 })
    .withMessage("Nombre debe debe ser mayor a 8"),
  body("active").exists().isNumeric().withMessage("Debe ser un numero"),
  body("personal").exists().isNumeric().withMessage("Debe ser un numero"),
  body("max").exists().isNumeric().withMessage("Debe ser un numero"),
];

export default validations;
