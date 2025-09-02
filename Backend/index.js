import express from 'express';
import connectDB from './lib/connectDB.js';
import userRouter from './routes/user.route.js';
import postsRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import webhookRouter from './routes/webhook.route.js';
import { clerkMiddleware, requireAuth } from '@clerk/express';




const app = express();
app.use(clerkMiddleware());
app.use('/webhooks', webhookRouter);
app.use(express.json());


// app.get("/auth-state", (req, res) => {
//     const authState = req.auth();
//     res.json(authState);
// });

// app.get("/protect", (req, res) => {
//     const {userId} = req.auth;
//     if(!userId) {
//         return res.status(401).json({message: "not authenticated"});
//     }
//     res.status(200).json('Content');
// });  

// app.get("/protect2", requireAuth(), (req, res) => {
//     res.status(200).json('authorized');
// }); 




app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/comment', commentRouter);

// app.get("/auth-state", (req, res) => {
//     const authState = req.auth;
//     res.json(authState);
// });  



app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message || 'Internal Server Error',
        status: error.status,
        stack: error.stack,
    });

});


app.listen(`4001`, () => {
    connectDB();
    console.log(`Server is running on port 4001`);
})

