import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
    console.log("item deleted");
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="4">
        <Card style={{ width: "", marginBottom: "2rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Codetrain User
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email:{props.userInfo.email}</p>
              <p>Gen:{props.userInfo.gen}</p>
            </Card.Text>
            <Button size="sm" onClick={handleShow}>
              Edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              style={{ marginLeft: "10px" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;
