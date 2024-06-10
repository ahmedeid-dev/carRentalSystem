import { carCollection } from "../../database/dbConnection.js";

const GetCarsByTwoModels =async (req, res) => {
    try {
    const response = await carCollection.find({name:{$in:['toyota','honda']}}).toArray()
        if (response.length==0) return res.status(404).json({ message: " No Car Exist", response })
        return res.status(200).json({ message: " Success",numOfCars:response.length, response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at GetCarsByTwoModels",error })
    }
}

const GetCarsWithSpecificModel = async (req, res) => {
    const { model, rentalStatus } = req.query;
    try {
    const response = await carCollection.find({name:model,rentalStatus:"available"}).toArray()
        if (response.length==0) return res.status(404).json({ message: " No Car Exist", response })
        return res.status(200).json({ message: " Success",numOfCars:response.length, response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at GetCarsWithSpecificModel",error })
    }
}

const GetCarsEitherRentedOrSpecificModel =async (req, res) => {
    const {model} = req.query;
    try {
        const response = await carCollection.find({ $or: [{ name: model },{rentalStatus:"rented"}]}).toArray()
        if (response.length==0) return res.status(404).json({ message: " No Car Exist", response })
        return res.status(200).json({ message: " Success",numOfCars:response.length, response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at GetCarsWithSpecificModel",error })
    }
}

const AllCarsOfSpecificModelsByRentalStatus =async (req, res) => {
    const { model, rentalStatus } = req.query;
    try {
        const response = await carCollection.find({ $and: [{ rentalStatus }, { name: model }] }).toArray()
        if (response.length == 0) return res.status(404).json({ message: " No Car Exist", response })
        return res.status(200).json({ message: " Success", numOfCars: response.length, response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at AllCarsOfSpecificModelsByRentalStatus",error:error.errorResponse.errmsg })
    }
}

export {
    GetCarsByTwoModels,
    GetCarsWithSpecificModel,
    GetCarsEitherRentedOrSpecificModel,
    AllCarsOfSpecificModelsByRentalStatus
}