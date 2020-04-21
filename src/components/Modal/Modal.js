import React from 'react';
import "./Modal.scss"
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
          It's a Match!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="matchImg">
          <img src={`./images/users/${props.user}.jpg`} alt={props.user} />
          <img src={`./images/users/${props.id}.jpg`} alt={props.name} />
        </div>
        <p className="matchDesc"> You and {props.name} have liked each other! </p>
      </Modal.Body>
    </Modal>
  );
}
