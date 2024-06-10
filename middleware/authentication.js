import { usercollection } from "../database/dbConnection.js";
import  bcrypt  from 'bcryptjs';

// Check if the email exists before signup
const isEmailExist = async (req, res, next) => {
    const { email } = req.body;
    const result = await usercollection.findOne({ email })
    if (result?.email == email) return res.status(401).json({ message: "email already exist" })
    let hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    next();
}

//check email in login
const checkEmail =async (req, res, next) => {
    const { email } = req.body;
    const result = await usercollection.findOne({ email })
    console.log(result);
    if (result?.email !== email) return res.status(401).json({ message:"Wrong Email Or Password "})
    let match= bcrypt.compareSync(req.body.password,result?.password)
    if (!match) return res.status(401).json({ message: "Wrong Email Or Password " });
    next()
}

// Check if the email exists before update
const checkEmailBeforeUpdate = async (req, res, next) => {

    const id = req.params.id;
    const email = req.body.email;
    const user = await usercollection.findOne({ email })
    if (user == null) return res.status(401).json({ message: "email not exist" })
    else if (user._id != id) return res.status(404).json({ message: " No User Exist to this id" });
    let hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    next();
}
// Check if the email exists before signup
const checkEmailBeforeDelete = async (req, res, next) => {
    const id = req.params.id;
    const email = req.body.email;
    const user = await usercollection.findOne({ email })
    if (user==null) return res.status(401).json({message:"email not exist"})
        if (user == null) return res.status(401).json({ message: "email not exist" })
            else if (user._id != id) return res.status(404).json({ message: " No User Exist to this id" });
        next();
        }
    
export { 
    isEmailExist,
    checkEmail,
    checkEmailBeforeUpdate,
    checkEmailBeforeDelete
}