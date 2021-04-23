import SberIdLogo from "../../../static/sberid-logo.svg";
import SecureIcon from "../../../static/secure.svg";
import Button from "react-bootstrap/Button";
import {Image} from "react-bootstrap";

const SberIdButton = () => {
    return (
        <div>
            <Button variant="success" className="sber-id-button" block href="/oauth2/authorization/sber-id">
                <Image src={SberIdLogo} /> Войти по Сбер ID
            </Button>
            <div className="comment">
                <Image src={SecureIcon} /> Это безопасно и удобно. Ваши данные защищены шифрованием
            </div>
        </div>
    )
};

export default SberIdButton;