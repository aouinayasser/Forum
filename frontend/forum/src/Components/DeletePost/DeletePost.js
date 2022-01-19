import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCallCenterPost,
  deleteClientPost,
} from "../../redux/actions/PostAction";

export default function DeletePost({ callPost, clientPost }) {
  const dispatch = useDispatch();
  const { callCenterIsAuth } = useSelector(
    (state) => state.callCenterAuthReducer
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    callCenterIsAuth
      ? dispatch(deleteCallCenterPost(callPost._id))
      : dispatch(deleteClientPost(clientPost._id));
  };
  return (
    <>
      <span className="bi bi-trash-fill text-danger" onClick={handleShow}>
        &nbsp;&nbsp;<span style={{ color: "black" }}>Delete post</span>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post ?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
              handleClose()
            }}
          >
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
