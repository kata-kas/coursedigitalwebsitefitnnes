import '../App.css';
import banner from '../assets/banner.jpg';
import Button from 'react-bootstrap/Button';

function Banner(){
    return (
         <div className="App">
        <div className="Container">
        <img src={banner} className="App-banner" alt="NOSS Banner"/>
        <div className="centered">
          Noi te putem ajuta să fii în formă maximă! 
          <br></br>
          <Button className="btn">
          AFLĂ CUM!
          </Button>
          </div>
      </div>
      </div>
      );}

export default Banner;