import express from "express";
import { getFeedPosts, getUserPosts, likePost , deletePost, createComment} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

/* CREATE Comment */
router.post("/:id/comment", verifyToken, createComment);

// Delete a post
router.delete("/:id", deletePost);

export default router;