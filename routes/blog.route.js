import { Router } from 'express';
import { createBlog, deleteBlog, getBlog, updateBlog } from '../controllers/blog.controller.js';
const router = Router();

router.get('/', getBlog);

router.post('/', createBlog);

router.put('/:id', updateBlog);

router.delete('/:id', deleteBlog);

export default router;