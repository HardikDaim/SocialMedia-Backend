import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  searchUsers
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
  
/* SEARCH */
router.get("/search/:query*", verifyToken, searchUsers);

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);


export default router; 