import Blog from '../models/blog.model.js';

export const createBlog = async (req, res) => {
    try {
        const { name, desc } = req.body;

        if (!name || !desc) {
            return res.status(400).json({ message: 'All the fields must be filled.' });
        }

        const blog = await Blog.create({ name, desc });

        return res.status(201).json({ message: 'Blog created successfully', blog });
    } catch (error) {
        return res.status(500).json({ error: 'Server error while creating the blog' });
    }
};

export const getBlog = async (req, res) => {
    try {
        const blogs = await Blog.find();

        if (!blogs || blogs.length === 0) {
            return res.status(200).json({ message: 'No blogs found' });
        }

        return res.status(200).json({ blogs });
    } catch (error) {
        return res.status(500).json({ error: 'Server error while getting the blogs' });
    }
};