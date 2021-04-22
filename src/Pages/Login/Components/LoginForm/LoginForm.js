import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SberIdLoginForm = () => {
    return (
        <div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Ваш email</Form.Label>
                <Form.Control type="email" placeholder="Введите email" />
                <Form.Text className="text-muted">
                    Мы не не передаем данные третьим лицам
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Выйти" />
            </Form.Group>
            <Button variant="secondary" type="submit" block>
                Войти
            </Button>
            <div className="divider"/>
        </div>
    )
};

export default SberIdLoginForm;