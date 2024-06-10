import { Router } from "express";
import { checkEmailBeforeUpdate, checkEmail, isEmailExist, checkEmailBeforeDelete } from "../../middleware/authentication.js";
import { deleteUser, getAllUsers, getOneUser, signin, signup, updateUser } from "./customer.controllers.js";

const userRouter = Router();
userRouter.post('/signup', isEmailExist, signup)
    .post('/signin', checkEmail, signin)
    .get('/', getAllUsers)
userRouter.route('/:id')
    .put(checkEmailBeforeUpdate, updateUser)
    .delete(checkEmailBeforeDelete, deleteUser)
    .get(getOneUser)
export default userRouter;