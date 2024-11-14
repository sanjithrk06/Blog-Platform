import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/blog.route.js';
import authRouter from './routes/auth.route.js';
import { authMiddleware } from './middleware/auth.middleware.js';

dotenv.config();

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
    } catch (err) {
        console.log(`Error in connecting: ${err}`);
        process.exit(1);
    }
};

app.use(express.json());

app.use('/auth', authRouter);

app.use('/blog', authMiddleware, router);

app.listen(process.env.PORT, async () => {
    await connectDB();
    console.log(`App is listening on the port ${process.env.PORT}`);
});

// To generate jwt secret key
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

// MONGO_URI='mongodb://localhost:27017/Blog'
// PORT=4001
// JWT_SECRET='d9ae805ddb0de79f145b260df48afe96146beaeffafb801c6801001ff415d798'