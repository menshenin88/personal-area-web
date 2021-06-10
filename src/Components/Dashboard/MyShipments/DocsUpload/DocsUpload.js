import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './DocsUpload.css'

const DocsUpload = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="shipment-button" variant="primary" onClick={handleShow}>
            Предоставить данные
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Предоставить данные</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Необходимо предоставить документы в формате .pdf
                <Form>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="shipment-button" onClick={handleClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default DocsUpload;