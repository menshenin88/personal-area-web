import React, { useState } from 'react';
import './MySettings.css';
import { Form, Button } from 'react-bootstrap';

const MySettings = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
        <div className="settings-form">
            <h3 className="settings-header">Настройки</h3>
            <hr className="solid"></hr>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>    
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                    readOnly
                    type="text"
                    placeholder="Иван"
                    defaultValue="Иван"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control
                    readOnly
                    type="text"
                    placeholder="Иванович"
                    defaultValue="Иванович"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                    readOnly
                    type="text"
                    placeholder="Иванов"
                    defaultValue="Иванов"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ваш email</Form.Label>
                    <Form.Control type="email" placeholder="Введите email" />
                    <Form.Text className="text-muted">
                    Мы никому не передаем Ваши личные данные
                    </Form.Text>
                </Form.Group>
                <hr></hr>
                <Form.Group>
                    <Form.Check
                        required
                        label="Мною дано согласию на обработку личных данных"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button className="submit-button" type="submit">Сохранить</Button>
                <Button className="submit-close" variant="secondary">Закрыть</Button>
            </Form>
        </div>
    );
};
  
export default MySettings;