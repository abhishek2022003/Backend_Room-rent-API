import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
// import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/check", verifyToken , (req,res,next) => {
//     res.send("hello user , you are authenticated")
// })

// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);
// router.get("/:id", getUser);
// router.get("/", getUsers);


router.put("/:id", verifyUser, updateUser);

// //DELETE
router.delete("/:id", verifyUser, deleteUser);

// //GET
router.get("/:id", verifyUser, getUser);

// //GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;