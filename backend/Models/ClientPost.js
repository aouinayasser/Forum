const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clientPostSchema = new schema({
  description: {
    type: String,
    required: true,
  },
  Client:{
    type:schema.Types.ObjectId,
    ref:'Client'
  }
});

module.exports = mongoose.model("ClientPost", clientPostSchema);