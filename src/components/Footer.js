import '../App.css';
import {Container, Col, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div style={{backgroundColor:'black'}}>
        <Container className="footer">
            <Row>
                <Col><Link to="/termeni-si-conditii" style={{ textDecoration: 'none', color:"#fcaf3b" }}>Termenii și Condițiile</Link></Col>
                <Col> <a href="https://www.facebook.com/NOSSLifestyle" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#fcaf3b"/></a> &nbsp; &nbsp;

                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Flaurentiu_noss%3Figshid%3D1pjqqzjmmnkkw%26fbclid%3DIwAR0Xr_nPOuuyaQ_1mbw72FvsfDst924L7buJEYAdot2Sys8fENtU-q5V_9w&h=AT2Jdf_oSq8fqjILyBCXl8IxZnbwAdXPdYUoiIicYw_PFKSoQkpJIciIo5VPnKyD8XKA9-PLqEsDPBPH2O8CFaGBNzW53Eu0GARwXwELRi4lqLLfdmnWSJHPvxd337uTNB-GDnTClQ4" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#fcaf3b"/> </a>&nbsp; &nbsp;

                    <a href="https://www.youtube.com/channel/UCHLllQ7P6WjGVdbuIvIXJew" target="blank" style={{textDecoration:'none'}}>
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="#fcaf3b"/> </a> &nbsp;  &nbsp;    
                </Col>
            </Row>
            <Row>
                <Col><Link to="/contact" style={{ textDecoration: 'none', color:"#fcaf3b" }}>Contact</Link></Col>
                <Col></Col>  
            </Row>
            <Row>
                <Col><p>ANPC</p></Col>
                <Col></Col>
            </Row>
        </Container></div>
    );
}

export default Footer;