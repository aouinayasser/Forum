const mongoose = require("mongoose");
const schema = mongoose.Schema;

const callCenterPostSchema = new schema({
  description: {
    type: String,
    required: true,
  },
  CallCenter:{
    type:schema.Types.ObjectId,
    ref:'CallCenter'
  }
});

module.exports = mongoose.model("CallCenterPost", callCenterPostSchema);