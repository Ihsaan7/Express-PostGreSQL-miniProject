import { ApiError } from "../utils/ApiError.js";
import {AsyncHandler} from "../utils/AysncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { getAllUsersService , getUserByIdService , createUserService , updateUserService , deleteUserService} from "../models/user.model.js"

export const createUser = AsyncHandler(async(req , res)=>
    {
        const {name , email} = req.body
        if(!name || !email){ throw new ApiError(404 , "Both fields are required!")}

        const newUser = await createUserService(name , email);
        return res.status(201).json(
                new ApiResponse(201 ,"User created successfully", newUser)
            )
    })

export const getAllUsers = AsyncHandler(async(req , res)=>
    {
        const allUsers = await getAllUsersService()
        return res.status(200).json(
            new ApiResponse(200, "Users fetched succesfully" , allUsers)
        )
        
    })

export const getUserById = AsyncHandler(async(req , res)=>
    {
        const {id} = req.params;
        if(!id){ throw new ApiError(404, "No id found!")}
        
        const user = await getUserByIdService(id)
        if(!user) throw new ApiError(404 , "User not found!")
        
        return res.status(200).json(
            new ApiResponse(200, "User fetched successfully", user)
        )
    })

export const updateUser = AsyncHandler(async(req , res)=>
    {
        const {name , email} = req.body
        if(!name || !email) throw new ApiError(400, "Both fields are required")
    
        const  {id} = req.params
        if(!id) throw new ApiError(404 , "No id found!")

        const updatedUser = await updateUserService(id , name , email);
        if(!updatedUser)throw new ApiError(404, "user not found")
        
            return res.status(200).json(
                new ApiResponse(200 ,"User updated successfully" , updatedUser)
            )
    })

export const deleteUser = AsyncHandler(async(req , res)=>
    {
        const {id} = req.params
        if(!id) throw new ApiError(404, "No id found!")
    
        const deletedUser = await deleteUserService(id)
        return res.status(200).json(
            new ApiResponse(200, "User deleted successfully", deleteUser)
        )  
      
        })