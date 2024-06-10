import { Router } from "express";
import { createRental, deleteRental, getAllRentals, getOneRental, updateRental } from "./rental.controllers.js";

const rentalRouter = Router();

rentalRouter.route('/')
    .post(createRental)
    .get(getAllRentals)
rentalRouter.route('/:id')
    .put(updateRental)
    .delete(deleteRental)
    .get(getOneRental)
export default rentalRouter;