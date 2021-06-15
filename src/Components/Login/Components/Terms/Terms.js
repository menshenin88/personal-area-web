import React, {useState} from 'react';
import './Terms.css';
import { Button, Modal, Image, FormCheck } from 'react-bootstrap';
import SecureIcon from "../../../../static/terms.svg";
import { useSelector, useDispatch } from 'react-redux';
import { acceptTerms, declineTerms } from '../../../../features/tracking/trackingSlice';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Tracking from '../../../../Containers/Tracking/Tracking2';
import PrivateRoute from '../../../../Services/PrivateRoute/PrivateRoute'

const Terms = (props) => {
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();
    let history = useHistory();
  
    const checkTerms = (event) => {
        if (event.target.checked){
            setCheck(true)
        } else {
            setCheck(false)
        }
    }
    const handleClose = () => {
        setShow(false)
        if (check){
            dispatch(acceptTerms())
            history.push('/tracking')
        } else {
            dispatch(declineTerms())
        }
    }
    const handleShow = () => setShow(true);

    const terms = useSelector((state) => state.tracking.termsAccepted)

    const termsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    if (terms) {
        return (
            <Router>
                <Switch>
                    <PrivateRoute exact path="/tracking" component={() => <Tracking />} /> 
                </Switch>
            </Router>
        )
    }

    return (
        <div className="terms-wrapper">
            <div className="terms-wrapper-inner">
                <Button variant="success" className="sber-id-button" onClick={handleShow} block >
                    Подтвердить соглашение
                </Button>
                <div className="comment">
                    <Image className="secure-icon" src={SecureIcon} /> Перед использованием данного сервиса необходимо ознакомиться с соглашением об использовании личных данных
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Соглашение об использовании личных данных</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {termsText}
                    </Modal.Body>
                    <Modal.Body>
                        <FormCheck label="Даю согласие на обработку данных" onChange={checkTerms} checked={check}>
                        </FormCheck>    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="success" className="sber-id-button" onClick={() => (handleClose())} >
                        Сохранить изменения
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
};

export default Terms;