import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editCallCenterPost,
  editClientPost,
  getOneCallCenterPost,
  getOneClientPost,
} from "../../redux/actions/PostAction";

export default function EditPost({ callPost, clientPost }) {
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState({ description: "" });
  const { callCenterIsAuth } = useSelector(
    (state) => state.callCenterAuthReducer
  );
  const { callCenterPost } = useSelector(
    (state) => state.callCenterPostReducer
  );
  const cliPost = useSelector((state) => state.clientPostReducer.clientPost);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setEditedPost({ ...editedPost, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    callCenterIsAuth
      ? dispatch(editCallCenterPost(callCenterPost._id, editedPost))
      : dispatch(editClientPost(cliPost._id, editedPost));
  };

  const getPost = () => {
    callCenterIsAuth
      ? dispatch(getOneCallCenterPost(callPost._id))
      : dispatch(getOneClientPost(clientPost._id));
  };

   useEffect(() => {
     callCenterIsAuth ?
          setEditedPost({ description: callCenterPost.description })
        : setEditedPost({ description: cliPost.description })
        }, [callCenterPost,cliPost])
      
  
  return (
    <>
      <span
        className="bi bi-pencil-fill text-warning"
        onClick={() => {
          getPost();
          handleShow();
        }}
      >
        &nbsp;&nbsp;<span style={{ color: "black" }}>Edit post</span>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={editedPost.description}
                type="text"
                as="textarea"
                placeholder="Description"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
