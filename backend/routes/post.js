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

const callCenterIsAuth = require('../middleware/callCenterIsAuth')
const clientIsAuth = require('../middleware/clientIsAuth')

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
router.post("/callcenter/addCallCenterPost",callCenterIsAuth, addCallCenterPost);

//@ method delete
//@ url /:callCenterPostId
// req.params
router.delete("/delete/callPost/:callCenterPostId",callCenterIsAuth, deleteCallCenterPost);

//@ method put
//@ url /:callCenterPostId
// req.params
// req.body
router.put("/update/callPost/:callCenterPostId",callCenterIsAuth, updateCallCenterPost);

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
router.post("/client/addClientPost",clientIsAuth, addClientPost);

//@ method delete
//@ url /:clientPostId
// req.params
router.delete("/delete/clientPost/:clientPostId",clientIsAuth, deleteClientPost);

//@ method put
//@ url /:clientPostId
// req.params
// req.body
router.put("/update/clientPost/:clientPostId",clientIsAuth, updateClientPost);

module.exports = router;
