import Post from '../models/postModel.js';

/**
 * Home Page
 */
const homePage = async (req, res, next) => {
    const posts = await Post.find({});
    res.render('./posts/index', { title: "Home Page", posts });
}

/**
 * Create Post
 */
const createPostPage = (req, res) => {
    res.render("./posts/create", { title: "Create Post" });
}

const newPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        await post.save();
        res.redirect("/");
    } catch(error) {
        console.log(error.message);
    }
}

const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if(post !== null) {
        res.render("./posts/details", { title: post.title, post });
    }
}

const deletePost = async (req, res) => {
    const id = req.params.id;
    if(id !== null) {
        await Post.findByIdAndDelete(id);
        res.redirect("/");
    } else {
        res.redirect("/");
    }
}

export { homePage, createPostPage, newPost, getPost, deletePost }