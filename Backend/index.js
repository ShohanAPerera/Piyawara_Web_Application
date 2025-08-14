import express from 'express';
import connectDB from './lib/connectDB.js';
import userRouter from './routes/user.route.js';
import postsRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';


const app = express();
app.use(express.json());


app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/comment', commentRouter);

app.use((err, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: err.message || 'Internal Server Error',
        status:error.status,
        stack:error.stack,
    });
 
    });


app.listen(`4000`, () => {
    connectDB();
    console.log(`Server is running on port 3000`);
})

