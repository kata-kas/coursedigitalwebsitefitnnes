import '../App.css';
import banner from '../assets/banner.jpg';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Header from './Header';
import clip from './video.mp4'; 
function Banner(){
    return (
         <div className="App"><video autoPlay loop muted id="background-video">
            <source src={clip} type='video/mp4' />
    </video>
        <div className="Container" style={{height:'100vh'}}>
        <Header/>
        <div className="centered">
          Noi te ajutăm să fii în formă maximă! 
          <br/>
          <br/>
          <Link to="/despre-noi">
         <span>
          AFLĂ CUM!
          </span></Link>
         </div>
      </div>
      </div>
      );}

export default Banner;