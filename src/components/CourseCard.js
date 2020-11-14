import '../App.css';
import {Card, Button, Col} from 'react-bootstrap';
import coursecardimg from '../assets/cardcourse.png';
import React from 'react';
import {Link} from 'react-router-dom';

function CourseCard () {
    return (
        <div className="full">
        <Card border="warning" style={{ width: 'auto', marginLeft:'20%', marginRight:'20%' }}>
        <Card.Img variant="top" src={coursecardimg} alt="Curs Fittnes pentru începători" />
        <Card.Body>
        <Card.Title style={{textAlign: 'left', fontFamily:'Poppins',
        margin:'10%'}}><strong> Curs "Fitness pentru începători"</strong></Card.Title>
        <Card.Text style={{textAlign: 'left', lineHeight:'10px', margin:'10%'}}>
                    <p> <strong>20 Noiembrie 2020</strong></p><br/>
                    <p> 30 zile</p>
                    <p>200 RON</p><br/><br/>
                    <Link to="/curs-fitness-pentru-incepatori"
                    style={{textDecoration: 'none', color: 'black', fontFamily:'Poppins', fontSize:'20px',
                  }}
                    >Detalii</Link>
        </Card.Text>
        <div >
        <Link to="/inscriere">
        <Button as={Col} variant="warning"
        style={{color: 'black', fontFamily:'Poppins', fontSize:'20px',
       }}>Înscrie-te</Button>
       </Link>
        </div> 
       </Card.Body>
        </Card>
       </div>
    );
}

export default CourseCard;