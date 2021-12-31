import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function EditPost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span class="bi bi-pencil-fill text-warning" onClick={handleShow}>
        &nbsp;&nbsp;<span style={{color:"black"}} >Edit post</span>
        </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" as='textarea' placeholder="Description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
