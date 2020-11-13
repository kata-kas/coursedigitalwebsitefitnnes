import '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import coursecardimg from '../assets/coursecard.jpg';
function CourseCard () {
    return (
        <div className="full">
        <Container className="square">
            <Row>
                <Col>
                    <img src={coursecardimg} alt="Curs Fitness Pentru Incepatori"/>
                </Col>
                <Col className="squareright">
                    <h1>Curs "Fitness pentru începători"</h1><br/>
                    <p>Data: 20.11.2020</p><br/>
                    <p>Cost: 100 RON</p><br/>
                    <Button>Hey, apasa acili sea</Button>
                </Col>
            </Row>
        </Container></div>
    );
}

export default CourseCard;