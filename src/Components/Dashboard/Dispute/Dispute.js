import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import './Dispute.css';

const Dispute = (props) => {
    const [key, setKey] = useState('home');

    return(
        <div className="dispute-form">
            <h3 className="dispute-header">Споры</h3>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Активные" className="disputenavitem">
                    <p className="disputetext active">У вас нет активных споров</p>
                </Tab>
                <Tab eventKey="profile" title="Закрытые">
                    <p className="disputetext active">У вас нет закрытых споров</p>
                </Tab>
            </Tabs>
        </div>
    )
};

export default Dispute;
            /*
            <Nav defaultActiveKey="/home" as="ul" justify="false">
                <Nav.Item as="li">
                    <Nav.Link href="/home" className="disputenavitem active">
                        <p className="disputetext active">Активные</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="box-e">
                    <Nav.Link eventKey="link-1" className="disputenavitem">
                        <p className="disputetext">Закрытые</p>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            */