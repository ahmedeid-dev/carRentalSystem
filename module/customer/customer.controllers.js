import { ObjectId } from "mongodb";
import { usercollection } from "../../database/dbConnection.js"

const signup = async(req, res) => {
    try {
        const response = await usercollection.insertOne(req.body);
    res.status(201).json({ message: "added Successfully", response })
    } catch (error) {
    res.status(401).json({ message: "error occured at signup", error })

    }
}

const signin = async (req, res) => {
    const { email } = req.body;
    const response = await usercollection.findOne({ email })
    return res.status(200).json({ message: "Login Successfully.",Token:"token",userId:response._id});
}

const getOneUser = async (req, res) => {
    const id = req.params.id;
    try {
        const response =await  usercollection.findOne({ _id: new ObjectId(id) })
        if (response==null) return res.status(404).json({ message: " No user Exist to this id", response })
        return res.status(200).json({ message: " Success", response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at getOneUser" })
    }
}

const getAllUsers=async(req, res) => {
    try {
        const response = await usercollection.find().toArray()
        return res.status(200).json({ message: " Success",numOfUsers:response.length, response })
    } catch (error) {
        return res.status(400).json({ message: "error occured at getAllUsers", error })
        }
}

const updateUser=async (req, res) => {
    const id = req.params.id;
    try {
        const response = await usercollection.updateOne({ _id: new ObjectId(id) }, {
            $set: {
                name: req.body.name,
                email: req.body.newEmail,
                phone: req.body.phone,
                password:req.body.password
        } })
        if (response.matchedCount==0) return res.status(404).json({ message: " No User Exist to this id", response })
        return res.status(200).json({ message: " Updated Successfully", response })
    } catch (error) {
            return res.status(400).json({ message: "error occured at updateUser" })
    }
}

const deleteUser=async(req, res) => {
    const id = req.params.id; 
    try {
        const response = await usercollection.deleteOne({ _id: new ObjectId(id) })
        if (response.deletedCount==0) return res.status(404).json({ message: " No User Exist to this id", response })
        return res.status(200).json({ message: " Deleted Successfully", response })
    } catch (error) {
        return res.status(400).json({ message: "error occured at deleteUser" });
    }
}

export {
    signup,
    signin,
    getOneUser,
    getAllUsers,
    updateUser,
    deleteUser
}