import '../App.css';
import {Container, Col, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Footer(){
    return(
        <div className="full">
        <Container className="footer">
            <Row>
                <Col>
                 <Link to="/contact">Contact</Link>
                </Col>
                <Col>
                    <p>Termenii și Condițiile</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <p>ANPC</p>
                </Col>
                <Col>
                    <p>Politică privind utilizarea modulelor cookie</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <p>Prelucrarea datelor cu caracter personal</p>
                </Col>
                <Col></Col>
            </Row>
        </Container></div>
    );
}

export default Footer;