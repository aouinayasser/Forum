const express = require("express");
const router = express.Router();

const {
  getOneClientPost,
  getAllClientPosts,
  addClientPost,
  deleteClientPost,
  updateClientPost,
} = require("../Controllers/ClientPosts");

const {
  getOneCallCenterPost,
  getAllCallCenterPosts,
  addCallCenterPost,
  deleteCallCenterPost,
  updateCallCenterPost,
} = require("../Controllers/CallCenterPosts");

const {
  getOneJobSeekerPost,
  getAllJobSeekerPosts,
  addJobSeekerPost,
  deleteJobSeekerPost,
  updateJobSeekerPost,
} = require("../Controllers/JobSeekerPosts");

const jobSeekerIsAuth = require('../middleware/jobSeekerIsAuth')
const callCenterIsAuth = require('../middleware/callCenterIsAuth')
const clientIsAuth = require('../middleware/clientIsAuth')

//////////// JOB SEEKER //////////////

//@ method get
//@ url /:jobSeekerPostId
// req.params
router.get("/jobSeeker/:jobSeekerPostId",jobSeekerIsAuth, getOneJobSeekerPost);

//@ method get
//@ url /
router.get("/jobSeeker",jobSeekerIsAuth, getAllJobSeekerPosts);

//@ method post
//@ url /addPost
// req.body
router.post("/addJobSeekerPost",jobSeekerIsAuth, addJobSeekerPost);

//@ method delete
//@ url /:jobSeekerPostId
// req.params
router.delete("/:jobSeekerPostId",jobSeekerIsAuth, deleteJobSeekerPost);

//@ method put
//@ url /:jobSeekerPostId
// req.params
// req.body
router.put("/:jobSeekerPostId",jobSeekerIsAuth, updateJobSeekerPost);

//////////// CALL CENTER //////////////

//@ method get
//@ url /:callCenterPostId
// req.params
router.get("/callCenterPosts/:callCenterPostId", getOneCallCenterPost);

//@ method get
//@ url /callCenterPosts
router.get("/callCenterPosts", getAllCallCenterPosts);

//@ method post
//@ url /addPost
// req.body
router.post("/addCallCenterPost",callCenterIsAuth, addCallCenterPost);

//@ method delete
//@ url /:callCenterPostId
// req.params
router.delete("/:callCenterPostId",callCenterIsAuth, deleteCallCenterPost);

//@ method put
//@ url /:callCenterPostId
// req.params
// req.body
router.put("/:callCenterPostId",callCenterIsAuth, updateCallCenterPost);

//////////// CLIENT //////////////

//@ method get
//@ url /:clientPostId
// req.params
router.get("/clientPosts/:clientPostId", getOneClientPost);

//@ method get
//@ url /clientPosts
router.get("/clientPosts", getAllClientPosts);

//@ method post
//@ url /addPost
// req.body
router.post("/addClientPost",clientIsAuth, addClientPost);

//@ method delete
//@ url /:clientPostId
// req.params
router.delete("/:clientPostId",clientIsAuth, deleteClientPost);

//@ method put
//@ url /:clientPostId
// req.params
// req.body
router.put("/:clientPostId",clientIsAuth, updateClientPost);

module.exports = router;