import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCallCenterPost,
  addClientPost,
} from "../../redux/actions/PostAction";

export default function AddPost() {
  const callCenterIsAuth = useSelector(
    (state) => state.callCenterAuthReducer.callCenterIsAuth
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addPost, setAddPost] = useState({ description: "" });
  const handleChange = (e) => {
    setAddPost({ ...addPost, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(callCenterIsAuth)
    callCenterIsAuth
      ? dispatch(addCallCenterPost(addPost))
      : dispatch(addClientPost(addPost));
  };

  return (
    <>
      <button type="button" className="btn btn-success" onClick={handleShow}>
        <span className="bi bi-plus-circle" aria-hidden="true"></span>
        &nbsp;&nbsp;Add a post
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            as="textarea"
            placeholder="Description"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
          >
            Add post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
