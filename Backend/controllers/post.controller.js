import Post from "../models/post.model.js";
import User from "../models/user.model.js";



export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

//With Authentication
export const createPost = async (req, res) => {
  try {
   
    const { userId: clerkUserId } = req.auth(); 

    if (!clerkUserId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newPost = new Post({ user: user._id, ...req.body });
    const post = await newPost.save();

    res.status(201).json(post);
  } catch (err) {
    console.error("Error creating post:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  const { userId: clerkUserId } = req.auth();
  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const user = await User.findOne({ clerkUserId });
  
  const deletedPost = await Post.findOneAndDelete({ 
    _id: req.params.id, 
    user: user._id });
  res.status(200).json({ message: "Post has been deleted" });

  if (!deletedPost) {
    return res.status(403).json({ message: "You can delete only your own post" });
  }
  res.status(200).json({ message: "Post has been deleted" });
}
 
// // without authentication
// export const createPost = async (req, res) => {
//   try {
//     // Directly create a post from request body
//     const newPost = new Post({ ...req.body });

//     const post = await newPost.save();
//     res.status(201).json(post);
//   } catch (error) {
//     console.error("Error creating post:", error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };


