import Schema from 'mongoose';
import mongoose from 'mongoose';

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
);

export default mongoose.model('Comment', commentSchema);
// This code defines a Mongoose schema for a User model in a MongoDB database.