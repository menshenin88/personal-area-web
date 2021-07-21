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
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Серия и номер паспорта</Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        placeholder="0000-000000"
                        defaultValue="1234-123456"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Код подразделения выдачи</Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        placeholder="000-000"
                        defaultValue="123-123"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Дата выдачи документа</Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        placeholder="дд.мм.гггг"
                        defaultValue="10.11.2012"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Орган, выдавший документ</Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        defaultValue="УВД-2 ЦАО г. Москвы"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        placeholder="000000000000"
                        defaultValue="123456789012"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Адрес доставки</Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        placeholder="000000000000"
                        defaultValue="295022, Симферополь, Жени Дерюгиной ул, 3"
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        placeholder="+790012345678"
                        defaultValue="+790012345678"
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