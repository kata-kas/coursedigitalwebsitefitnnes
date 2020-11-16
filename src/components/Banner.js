import '../App.css';
import banner from '../assets/banner.webp';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Banner(){
    return (
         <div className="App">
        <div className="Container">
        <img src={banner} className="App-banner" alt="NOSS Banner"/>
        <div className="centered">
          Noi te putem ajuta să fii în formă maximă! 
          <br></br> </div>
          <div className="centered2">
          <Link to="/despre-noi">
          <Button variant="warning" buttonvariant="outline-dark" size="lg" className="Btn">
          AFLĂ CUM!
          </Button></Link>
         </div>
      </div>
      </div>
      );}

export default Banner;