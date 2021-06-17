import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

const PickUpPoint = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="shipment-button" variant="primary" onClick={handleShow}>
            Выбрать пункт выдачи заказов
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Выбрать пункт выдачи заказов</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Список доступных адресов:
                <Form>
                <Form.Control as="select" defaultValue="Выбрать...">
                    <option>Москва, Тверская 12</option>
                    <option>Москва, Красная площадь 1</option>
                </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="shipment-button" onClick={handleClose}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
}

export default PickUpPoint