import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Blog = mongoose.model('blog', blogSchema);

export default Blog;