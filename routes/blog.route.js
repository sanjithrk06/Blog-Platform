import { Router } from 'express';
import { createBlog, getBlog } from '../controllers/blog.controller.js';
const router = Router();

router.get('/', getBlog);

router.post('/', createBlog);

export default router;