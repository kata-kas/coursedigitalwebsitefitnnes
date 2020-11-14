import '../App.css';
import {Card, Button, Modal, Form, Col} from 'react-bootstrap';
import coursecardimg from '../assets/cardcourse.png';
import React from 'react';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Curs "Fitness pentru începători"
         </Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <h4 style={{textAlign:'center'}}>Înscriere</h4>
         <Form name="inscriere" method="post" data-netlify="true">
         <input type="hidden" name="inscriere" value="inscriere" />
         <Form.Row>
         <Form.Group as={Col} controlId="formGridName">
         <Form.Label>Nume Prenume</Form.Label>
         <Form.Control name="name" type="text" placeholder="Popescu Ion" />
         </Form.Group>
         </Form.Row>
         <Form.Row>
         <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Adresa Email</Form.Label>
         <Form.Control name="email" type="email" placeholder="popescu.ion@gmail.com" />
         </Form.Group>
         </Form.Row>
          <Form.Row>
         <Form.Group as={Col} controlId="formGridPhoneNumber">
         <Form.Label>Număr de telefon</Form.Label>
         <Form.Control name="phonenumber" type="tel" /> 
         </Form.Group>
         </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Sunt de acord cu termenii și condițiile " />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={props.onHide} style={{marginLeft:'40%', marginRight:'45%'}} variant="warning"
          type="submit">Trimite</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function CourseCard () {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="full">
        <Card border="warning" style={{ width: 'auto', marginLeft:'20%', marginRight:'20%' }}>
        <Card.Img variant="top" src={coursecardimg} alt="Curs Fittnes pentru începători" />
        <Card.Body>
        <Card.Title style={{textAlign: 'center'}}> Curs "Fitness pentru începători"</Card.Title>
        <Card.Text style={{textAlign: 'center'}}>
                    <p><strong>Data:</strong> 20.11.2020</p><br/>
                    <p><strong>Cost:</strong> 200 RON</p><br/><br/>
        </Card.Text>
        <div style={{textAlign:'center'}}>
        <Button variant="warning" onClick={() => setModalShow(true)}>Înscrie-te</Button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div> 
       </Card.Body>
        </Card>
       </div>
    );
}

export default CourseCard;