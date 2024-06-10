import { Router } from "express";
import { AllCarsOfSpecificModelsByRentalStatus, GetCarsByTwoModels, GetCarsEitherRentedOrSpecificModel, GetCarsWithSpecificModel } from "./specialApis.controllers.js";

const findCarRouter = Router();

findCarRouter.get('/byTwoModels', GetCarsByTwoModels)
    .get('/bySpecificModel', GetCarsWithSpecificModel)
    .get('/EitherRentedOrSpecificModel', GetCarsEitherRentedOrSpecificModel)
    .get('/AllCarsOfSpecificModelsByRentalStatus',AllCarsOfSpecificModelsByRentalStatus)
export default findCarRouter;