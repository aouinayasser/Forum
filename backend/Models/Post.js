const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema({
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Post", postSchema);