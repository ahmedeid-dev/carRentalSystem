import { ObjectId } from "mongodb";
import { carCollection } from "../../database/dbConnection.js"

const addCar = async(req, res) => {
    try {
    const response = await carCollection.insertOne(req.body);
    res.status(201).json({ message: "added Successfully", response })
    } catch (error) {
        console.log("error occured at add car", error);
    }
}
const getOneCar = async (req, res) => {
    const id = req.params.id;
    try {
    const response = await carCollection.findOne({ _id: new ObjectId(id) })
        if (response==null) return res.status(404).json({ message: " No Car Exist to this id", response })
        return res.status(200).json({ message: " Success", response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at getOneCar",error })
    }
}
const getAllCars=async(req, res) => {
    try {
        const response = await carCollection.find().toArray()
        return res.status(200).json({ message: " Success",numOfCars:response.length, response })
    } catch (error) {
        return res.status(400).json({ message: "error occured at getAllCars", error })
        }
}
const updateCar=async (req, res) => {
    const id = req.params.id;
    try {
        const response =await carCollection.updateOne({ _id: new ObjectId(id) },{$set:req.body})
        if (response.matchedCount==0) return res.status(404).json({ message: " No Car Exist to this id", response })
        return res.status(200).json({ message: " Updated Successfully", response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at updateCar" })
    }
}
const deleteCar=async(req, res) => {
    const id = req.params.id;
    try {
        const response =await carCollection.deleteOne({ _id: new ObjectId(id) })
        if (response.deletedCount==0) return res.status(404).json({ message: " No Car Exist to this id", response })
        return res.status(200).json({ message: " Deleted Successfully", response })
    } catch (error) {
        return res.status(400).json({ message: "error occured at deleteCar" });
    }
}
export {
    addCar,
    getOneCar,
    getAllCars,
    updateCar,
    deleteCar
}