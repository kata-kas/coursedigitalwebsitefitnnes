import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserGraduate, faHandshake, faTrophy} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Benefits(){
    return(
        <div className="Benefits">
        <Container className="benefits">
            <Row>
                <Col sm>
                    <FontAwesomeIcon icon={faUserGraduate} size="5x" color="#fcaf3b" />
                    <br/>
                    Cursuri create de un antrenor calificat
                    <br/>
                </Col>
                <Col sm>
                    <FontAwesomeIcon icon={faHandshake} size="5x" color="#fcaf3b"/>
                    <br/>
                    Garanție 100% de funcționare a programelor noastre
                    <br/>
                </Col>
                <Col sm>
                    <FontAwesomeIcon icon={faTrophy} size="5x" color="#fcaf3b"/>
                    <br/>
                    O întreagă echipa de profesioniști în spate
                    <br/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Benefits;