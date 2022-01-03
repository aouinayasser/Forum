const express = require("express");
const router = express.Router();
const {
  getOnePost,
  getAllPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../Controllers/Posts");

//@ method get
//@ url /:postId
// req.params
router.get("/:postId", getOnePost);

//@ method get
//@ url /
router.get("/", getAllPosts);

//@ method post
//@ url /addPost
// req.body
router.post("/addPost", addPost);

//@ method delete
//@ url /:postId
// req.params
router.delete("/:postId", deletePost);

//@ method put
//@ url /:postId
// req.params
// req.body
router.put("/:postId", updatePost);

module.exports = router;