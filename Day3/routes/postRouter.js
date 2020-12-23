import express from 'express';
import { homePage, createPostPage, newPost, getPost, deletePost } from '../controller/postController.js';

const router = express.Router();

router.get("/", homePage);
router.get("/create", createPostPage);
router.post("/new", newPost);
router.route("/:id").delete(deletePost);
router.route("/:id").get(getPost);

export default router;