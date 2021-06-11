import React, { useState } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import './LoginBySMS.css'
import SberIdLogo from "../../../../../static/sberid-logo.svg";

const LoginBySMS = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" className="sber-id-button-sms" block onClick={handleShow}>
            <Image src={SberIdLogo} /> Войти по SMS
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Вход по SMS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Введите свой номер для получения SMS с кодом авторизации
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Ваш номер телефона" />
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
  
export default LoginBySMS;