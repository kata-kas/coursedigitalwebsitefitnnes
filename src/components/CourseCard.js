import '../App.css';
import {Card, Button, Col} from 'react-bootstrap';
import coursecardimg from '../assets/cardcourse.png';
import React from 'react';
import {Link} from 'react-router-dom';

function CourseCard () {
    return (
        <div className="full" >
        <Card border="danger" style={{ width: 'auto',  marginLeft:'10%', marginRight:'10%' }}>
        <Card.Img variant="top" src={coursecardimg} alt="Curs Fittnes pentru un stil de viață sănătos"/>
        <Card.Body>
        <Card.Title style={{textAlign: 'left', fontFamily:'Raleway',
        margin:'10%'}}><strong> Curs "Fitness pentru un stil de viață sănătos"</strong></Card.Title>
        <Card.Text style={{textAlign: 'left', lineHeight:'20px', margin:'10%', fontWeight:'bold'}}>
                     20 Noiembrie 2020<br/>
                     30 zile
                    200 RON<br/><br/>
                    <Link to="/curs-fitness-pentru-incepatori"
                    style={{textDecoration: 'none', color: 'rgb(29, 29, 29)', fontFamily:'Raleway', fontSize:'20px',
                  }}
                    >Detalii</Link>
        </Card.Text>
        <div >
        <Link to="/inscriere">
        <Button as={Col} variant="danger"
        style={{color: 'rgb(29, 29, 29)', fontFamily:'Raleway', fontSize:'20px',
       }}>Înscrie-te</Button>
       </Link>
        </div> 
       </Card.Body>
        </Card>
       </div>
    );
}

export default CourseCard;