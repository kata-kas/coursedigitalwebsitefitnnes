import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Form, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div style={{backgroundColor:'black'}}>
    <Header/>
    <Form className="form">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Adresa Email</Form.Label>
      <Form.Control type="email" placeholder="Adresa de email" />
    </Form.Group>

  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Adresa</Form.Label>
    <Form.Control placeholder="Strada și numărul" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Adresa 2</Form.Label>
    <Form.Control placeholder="Bloc, apartament" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Oraș</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Județ</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Nr de telefon</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox" style={{display:'block'}}>
    <Form.Check type="checkbox" label="Sunt de acord cu " required/><Link to="/termeni-si-conditii">termenii și condițiile </Link>
  </Form.Group>

  <Button style={{marginLeft:'40%', marginRight:'20%'}}variant="warning" type="submit">
    Trimite
  </Button>
</Form>
    <Footer/>
     </div>
      );
}

export default Contact;
