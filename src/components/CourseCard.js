import '../App.css';
import {Card, Button} from 'react-bootstrap';
import coursecardimg from '../assets/coursecard.jpg';
function CourseCard () {
    return (
        <div className="full">
        <Card border="warning" style={{ width: 'auto', marginLeft:'20%', marginRight:'20%' }}>
        <Card.Img variant="top" src={coursecardimg} />
        <Card.Body>
        <Card.Title style={{textAlign: 'center'}}> Curs "Fitness pentru începători"</Card.Title>
        <Card.Text style={{textAlign: 'center'}}>
                    <p><strong>Data:</strong> 20.11.2020</p><br/>
                    <p><strong>Cost:</strong> 100 RON</p><br/><br/>
        </Card.Text>
        <Button className="mx-auto" variant="warning">Înscrie-te</Button>
        </Card.Body>
        </Card>
       </div>
    );
}

export default CourseCard;