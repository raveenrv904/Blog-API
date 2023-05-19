const express = require("express");
const router = express.Router();

const {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/blog");

router.route("/").get(getAllPost);
router.route("/create").post(createPost);
router.route("/update").patch(updatePost);
router.route("/delete").delete(deletePost);

module.exports = router;
