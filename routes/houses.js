import express from "express";
import {
  countByCity,
  countByType,
  createHouse,
  deleteHouse,
  getHouse,
//   getHouseRooms,
  getHouses,
  updateHouse,
} from "../controllers/house.js";
import House from "../models/House.js";
import { createError } from "../utils/error.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// router.post("/", async (req,res) => {
//     const newHouse = new House(req.body)

//     try{
//         const savedHouse = await newHouse.save()
//         res.status(200).json(savedHouse)
//     }catch(err){
//         res.status(500).json(err)
//     }
// });

router.post("/",createHouse);

// router.put("/:id",async (req,res) => {
//     try{
//         const updatedHouse = await House.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true})
//         res.status(200).json(updatedHouse);
//     }catch(err){
//         res.status(500).json(err);
//     }
// });

router.put("/:id",updateHouse);

// router.delete("/:id",async (req,res) => {
//     try{
//         await House.findByIdAndDelete(req.params.id);
//         res.status(200).json("House has been deleted");
//     }catch(err){
//         res.status(500).json(err);
//     }
// });

// router.get("/:id",async (req,res) => {
//     try{
//         const house = await House.findById(req.params.id);
//         res.status(200).json(house);
//     }catch(err){
//         res.status(500).json(err);
//     }
// });

// router.get("/",async (req,res,next) => {
//     const failed = true;
//     if(failed) return next(createError(401,"You are not Authenticated"));
//     try{
//         const houses = await House.findById("ajbahg");
//         res.status(200).json(houses);
//     }catch(err){
//         next(err);
//     }
// });

// //CREATE
router.post("/", verifyAdmin, createHouse);

// //UPDATE
router.put("/:id", verifyAdmin, updateHouse);
// //DELETE
router.delete("/:id", verifyAdmin, deleteHouse);
// //GET

router.get("/find/:id", getHouse);
// //GET ALL

router.get("/", getHouses);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
// router.get("/room/:id", getHouseRooms);

export default router;