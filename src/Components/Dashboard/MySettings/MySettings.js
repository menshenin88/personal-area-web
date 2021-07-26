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

    let state = JSON.parse(sessionStorage.getItem('user'));
  
    return (
        <div className="settings-form">
            <h3 className="settings-header">Настройки</h3>
            <hr className="solid"></hr>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>    
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Имя"
                    value={state.name}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Отчество"
                    value={state.patronymic}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Фамилия"
                    value={state.lastName}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Дата рождения</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="дд.мм.гггг"
                        value={state.birthDate}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Серия паспорта</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="0000"
                        value={state.docSeries}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Номер паспорта</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="000000"
                        value={state.docNumber}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Код подразделения выдачи</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="000-000"
                        value={state.docIssuedByCode}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Орган, выдавший документ</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Наименование органа"
                        value={state.docIssuedBy}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Дата выдачи документа</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="дд.мм.гггг"
                        value={state.docIssuedDate}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="000000000000"
                        value={state.taxNumber}
                    />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="+790012345678"
                        value={state.phone}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ваш email</Form.Label>
                    <Form.Control type="email" placeholder="Введите email" value={state.email} />
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