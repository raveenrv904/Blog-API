const Blog = require("../models/Blog");

const getAllPost = async (req, res) => {
  try {
    const { author: authorName, title: titleName, sort: sortValue } = req.query;

    const newQuery = {};
    if (authorName) {
      newQuery.author = authorName;
    }
    if (titleName) {
      newQuery.title = titleName;
    }
    let allPost = Blog.find(newQuery);

    if (sortValue) {
      const sortslice = sortValue.split(",").join(" ");
      allPost = allPost.sort(sortslice);
    } else {
      allPost = allPost.sort("createdAt");
    }
    const result = await allPost;

    res.status(200).json({ posts: result, length: result.length });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};
const createPost = async (req, res) => {
  try {
    const { author: authorName, title: titleName } = req.body;
    const search = await Blog.find({ author: authorName, title: titleName });
    if (search.length != 0) {
      return res
        .status(400)
        .send(
          `Blog with author: ${authorName} and title: ${titleName} already exists.`
        );
    }

    const createBlog = await Blog.create(req.body);
    res.status(201).json(createBlog);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const updatePost = async (req, res) => {
  try {
    const { author: authorName, title: titleName, blog: newBlog } = req.body;
    const updatePost = await Blog.findOneAndUpdate(
      { author: authorName, title: titleName },
      newBlog,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res
      .status(404)
      .send(
        `No match found with author: ${authorName} and title: ${titleName}`
      );
  }
};

const deletePost = async (req, res) => {
  try {
    const { author: authorName, title: titleName } = req.query;
    const blogDeleted = await Blog.findOneAndDelete({
      author: authorName,
      title: titleName,
    });
    if (!blogDeleted) {
      return res
        .status(404)
        .send(
          `No match found with author: ${authorName} and title: ${titleName}`
        );
    }
    res.status(200).json(blogDeleted);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getAllPost, createPost, updatePost, deletePost };
