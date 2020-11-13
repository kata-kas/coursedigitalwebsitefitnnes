import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Form, Col, Button} from 'react-bootstrap'

function Contact() {
  return (
    <div>
    <Header/>
    <Form className="form">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Adresa Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Parola</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Adresa</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Adresa 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Oraș</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Județ</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Alege...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Număr de telefon</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Trimite
  </Button>
</Form>
    <Footer/>
     </div>
      );
}

export default Contact;
