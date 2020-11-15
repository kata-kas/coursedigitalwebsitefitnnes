import Header from '../components/Header';
import Footer from '../components/Footer';
import {Card, Button, Modal, Form, Col} from 'react-bootstrap';
import coursecardimg from '../assets/cardcourse.png';
import React from 'react';
import ReactPlayer from 'react-player';

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
            Curs "Fitness pentru un stil de viață sănătos"
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

function CursFpi(){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div style={{backgroundColor:'black'}}>
            <Header/>
            <Card border="warning" style={{ width: 'auto', marginLeft:'10%', marginRight:'10%', marginTop:'2%' }}>
        <Card.Img variant="top" src={coursecardimg} alt="Curs Fittnes pentru un stil de viață sănătos" 
        style={{width:"100%", height:'80%'}}
        />
        <Card.Title style={{textAlign: 'center', fontFamily:'Poppins', marginTop:'1%'
        }}><strong> Curs "Fitness pentru un stil de viață sănătos"</strong></Card.Title>
        <Card.Text style={{textAlign: 'center', fontFamily:'Poppins', marginTop:'1%'
        }}>
        <p>💪🏻 NOSS Lifestyle un concept care promovează un stil de viață sănătos și echilibrat!</p>

        <p>🎓 Mai mult, echipa : NOSS Lifestyle a pregătit un curs care vine în sprijinul dumneavoastră.</p>

        <p>📝 Cursul cuprinde informații despre nutriție și exerciții fizice.
        În concluzie dacă doriți să scăpați de kilogramele în plus acum este momentul.</p>
        <div style={{margin:'auto'}}>
        <ReactPlayer url='https://www.youtube.com/watch?v=NdaTY4ZoIzI' loop="true" playing="true" 
        width="100%" height="400px"/></div>
        </Card.Text>
        <Card.Body>
        <div >
        <Button as={Col} variant="warning"
        style={{color: 'black', fontFamily:'Poppins', fontSize:'20px',
       }}
         onClick={() => setModalShow(true)}>Mă înscriu acum</Button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div> 
       </Card.Body>
        </Card>
            <Footer/>
        </div>
    );
}

export default CursFpi;