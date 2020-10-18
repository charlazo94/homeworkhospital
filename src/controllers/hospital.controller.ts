import { Request, Response, Router } from "express";

//import config from 'config';
import { ErrorHandler, handleError } from "../error";
import bodyValidatior from "../middlewares/validators/hospitales/hospital.validator";
import validationsHandler from "../middlewares/validators/validator";
import Hospital from "../models/hospital";
const router = Router();

router.post(
  "/",
  bodyValidatior,
  validationsHandler,
  async (req: Request, res: Response) => {
    try {
      const { name, active, personal, max } = req.body;
      let hospital = new Hospital({ name, active, max, personal });
      const response = await hospital.save()
      res.status(200).send(response);
    } catch(error) {
      console.log(error)
      const custom = new ErrorHandler(400, "Error when try to save a Hospital");
      handleError(custom, req, res);
    }
  }
);
export default router;
