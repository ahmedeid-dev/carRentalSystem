import express from "express";
import carRouter from "./car/car.routes.js"
import userRouter from './customer/customer.routes.js';
import rentalRouter from './rental/rental.routes.js';
import findCarRouter from './specialApis/specialApis.routes.js';

const bootstrap = (app) => {
const port = 3000;
    app.use(express.json());
    app.use('/cars', carRouter)
    .use('/users', userRouter)
    .use('/rentals', rentalRouter)
    .use('/findCar', findCarRouter)
    app.get('/', (req, res) => res.status(200).json({message:'Hello in Car Rental System!'}))
    app.use('*', (req, res) => res.status(404).json({ message: 'cannot find route' }))
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

export default bootstrap