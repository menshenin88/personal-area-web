import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SberIdLoginForm = () => {
    return (
        <div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="secondary" type="submit" block>
                Войти
            </Button>
            <div className="divider"/>
        </div>
    )
};

export default SberIdLoginForm;