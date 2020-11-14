import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


function Header() {
    return(
        <div className="App">
        <header className="App-header">
        <Link to="/" >
        <img src={logo} className="App-logo" alt="NOSS logo" />
        </Link>
        <Navbar style={{backgroundColor:'orange'}} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto" >
        <Link to="/" style={{textDecoration:'none', color: 'black', fontSize:"25px", fontFamily:"Poppins"}}>Acasă</Link>  &nbsp; &nbsp; &nbsp;
        <Link to="/contact" style={{textDecoration:'none', color: 'black', fontSize:"25px",  fontFamily:"Poppins"}}>Contact</Link> &nbsp; &nbsp; &nbsp;
        <Link to="/despre-noi" style={{textDecoration:'none', color: 'black', fontSize:"25px",  fontFamily:"Poppins"}}>Despre Noi</Link>
        
         </Nav>
        </Navbar.Collapse>
        </Navbar>
        </header>
        </div>
    );
}

export default Header;