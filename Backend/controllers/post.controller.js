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


export const createPost = async (req, res) => {

  const clerkUserId = req.auth.userId;
  console.log(req.headers)

  // console.log(req.auth);
  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const user = await User.findOne({ clerkUserId });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const newPost = new Post({ user: user._id, ...req.body });
  // const post = await newPost.save();
  // res.status(201).json(post);
};


export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const user = await User.findOne({ clerkUserId });

  const post = await newPost.findOneAndDelete({ _id: req.params.id, user: user._id });
  res.status(201).json("post has been deleted");
};

// without authentication
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


