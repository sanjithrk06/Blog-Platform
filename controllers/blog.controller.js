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

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, desc } = req.body;

        if (!name || !desc) {
            return res.status(400).json({ message: 'All the fields must be filled.' });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { name, desc },
            { new: true, runValidators: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        return res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        return res.status(500).json({ error: 'Server error while updating the blog' });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Server error while deleting the blog' });
    }
};