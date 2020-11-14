import '../App.css';
import {Card, Button} from 'react-bootstrap';
import coursecardimg from '../assets/cardcourse.png';
function CourseCard () {
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
        <Button variant="warning">Înscrie-te</Button>
        </div> 
       </Card.Body>
        </Card>
       </div>
    );
}

export default CourseCard;