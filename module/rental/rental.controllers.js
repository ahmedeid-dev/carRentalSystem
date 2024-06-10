import { ObjectId } from "mongodb";
import { rentalcollection } from "../../database/dbConnection.js";

const createRental = async (req, res) => {

        // تعديل الوقت
    const {afterHowManyDaysWillReturnTheCar}=req.body
    const today = new Date();
    const returnDate = new Date(today.setDate(today.getDate() + afterHowManyDaysWillReturnTheCar));
    try {
        const response = await rentalcollection.insertOne({
            carId:req.body.carId,
            customerId:req.body.customerId,
        rentalDate:new Date(),
        returnDate
    });
    res.status(201).json({ message: "added Successfully", response })
    } catch (error) {
        console.log("error occured at createRental", error);
    }
}

const getOneRental = async (req, res) => {
    const id = req.params.id;
    try {
    const response = await rentalcollection.findOne({ _id: new ObjectId(id) })
        if (response==null) return res.status(404).json({ message: " No Rental Exist to this id", response })
        return res.status(200).json({ message: " Success", response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at getOneRental",error })
    }
}

const getAllRentals=async(req, res) => {
    try {
        const response = await rentalcollection.find().toArray()
        return res.status(200).json({ message: " Success",numOfRentals:response.length, response })
    } catch (error) {
        return res.status(400).json({ message: "error occured at getAllRentals", error })
        }
}

const updateRental = async (req, res) => {
    
    // تعديل الوقت
    const {afterHowManyDaysWillReturnTheCar}=req.body
    const today = new Date();
    const returnDate = new Date(today.setDate(today.getDate() + afterHowManyDaysWillReturnTheCar));
    
    const id = req.params.id;
    try {
        const response =await rentalcollection.updateOne({ _id: new ObjectId(id) },{$set:{
            carId:req.body.carId,
            customerId:req.body.customerId,
        rentalDate:new Date(),
        returnDate
    }})
        if (response.matchedCount==0) return res.status(404).json({ message: " No Rental Exist to this id", response })
        return res.status(200).json({ message: " Updated Successfully", response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at updateRental" })
    }
}

const deleteRental =async(req, res) => {
    const id = req.params.id;
    try {
        const response =await rentalcollection.deleteOne({ _id: new ObjectId(id) })
        if (response.deletedCount==0) return res.status(404).json({ message: " No Rental Exist to this id", response })
        return res.status(200).json({ message: " Deleted Successfully", response })
    } catch (error) {
        return res.status(400).json({ message: "error occured at deleteRental " });
    }
}

export {
    createRental,
    getOneRental,
    getAllRentals,
    updateRental,
    deleteRental 
}