import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {useState, useEffect} from 'react';

function Header() {
    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
    return(
        <div>
        <header className="App-header" id="header">
        <Navbar expand="lg" fixed="top" scrolling danger variant="light" 
       className={scroll ? "white" : "transparent"}
        >
        <Link to="/" style={{display:'flex', textDecoration:'none'}}>
        <img src={logo} className="App-logo" alt="NOSS logo" />
        <h3 style={{marginTop: '17%', color:'grey', fontSize:'18px', fontWeight:'800', textDecoration:'none'}}>N.O.S.S</h3>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" style={{
            border:'none', backgroundColor:'none', color: 'red'
        }} />

        <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto" >
        <Link to="/" style={{textDecoration:'none', color: 'grey', fontSize:"18px", fontFamily:"Raleway", fontWeight:"500"}}>Acasă</Link>  &nbsp; &nbsp; &nbsp;
        <Link to="/despre-noi" style={{textDecoration:'none', color: 'grey', fontSize:"18px",  fontFamily:"Raleway", fontWeight:"500"}}>Despre Noi</Link> &nbsp; &nbsp; &nbsp;
        <Link to="/contact" style={{textDecoration:'none', color: 'grey', fontSize:"18px",  fontFamily:"Raleway", fontWeight:"500"}}>Contact</Link>
         </Nav>
        </Navbar.Collapse>
        </Navbar>
        </header>
        </div>
    );
}

export default Header;