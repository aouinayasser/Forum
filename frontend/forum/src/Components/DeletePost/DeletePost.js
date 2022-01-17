import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function DeletePost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span className="bi bi-trash-fill text-danger" onClick={handleShow} >
        &nbsp;&nbsp;<span style={{ color: "black" }}>Delete post</span>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post ?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
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
