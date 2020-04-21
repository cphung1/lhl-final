import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalMatch(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={props.className}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          It's a Match
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You have a new match!
        </p>
      </Modal.Body>
    </Modal>
  );
}
