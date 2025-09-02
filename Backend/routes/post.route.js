import express from 'express';
import { requireAuth } from "@clerk/express";
import { getPosts, getPost, createPost, deletePost } from '../controllers/post.controller.js';

const router = express.Router();

// Public routes
router.get('/', getPosts);
router.get('/:slug', getPost);

// Protected routes
router.post('/posts', requireAuth(), createPost);
router.delete('/:id', requireAuth(), deletePost);

export default router;
