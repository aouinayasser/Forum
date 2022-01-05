const mongoose = require("mongoose");
const schema = mongoose.Schema;

const jobSeekerPostSchema = new schema({
  description: {
    type: String,
    required: true,
  },
  JobSeeker:{
    type:schema.Types.ObjectId,
    ref:'JobSeeker'
  }
});

module.exports = mongoose.model("JobSeekerPost", jobSeekerPostSchema);