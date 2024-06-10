import { Router } from "express";
import { addCar, deleteCar, getAllCars, getOneCar, updateCar } from "./car.controllers.js";

const carRouter = Router();
carRouter.route('/')
    .post(addCar)
    .get(getAllCars)
carRouter.route('/:id')
    .put(updateCar)
    .delete(deleteCar)
    .get(getOneCar)
export default carRouter;