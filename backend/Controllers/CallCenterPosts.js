const CallCenterPost = require("../Models/CallCenterPost");

// Add post
exports.addCallCenterPost = async (req, res) => {
  const { description } = req.body;
  try {
    const post = new CallCenterPost({
      description,
      CallCenter: req.callCenter.id,
    });
    await post.save();
    res.send({ msg: "Post added", post });
  } catch (error) {
    res.status(500).send("server error");
  }
};

// Get all Post
exports.getAllCallCenterPosts = async (req, res) => {
  try {
    const posts = await CallCenterPost.find().populate("CallCenter");
    res.send({ msg: "All posts displayed", posts });
  } catch (error) {
    res.send("server error");
  }
};

// Delete post
exports.deleteCallCenterPost = async (req, res) => {
  const { callCenterPostId } = req.params;
  try {
    await CallCenterPost.findByIdAndDelete(callCenterPostId);
    res.send("Post deleted");
  } catch (error) {
    res.send("server error");
  }
};

// Update Post
exports.updateCallCenterPost = async (req, res) => {
  const { callCenterPostId } = req.params;
  try {
    await CallCenterPost.findByIdAndUpdate(callCenterPostId, {
      $set: { ...req.body },
    });
    res.send("Post updated");
  } catch (error) {
    res.send("server error");
  }
};

// Get One Post
exports.getOneCallCenterPost = async (req, res) => {
  const { callCenterPostId } = req.params;
  try {
    const post = await CallCenterPost.findOne({
      _id: callCenterPostId,
    }).populate("CallCenter");
    res.send(post);
  } catch (error) {
    res.send("server error");
  }
};
