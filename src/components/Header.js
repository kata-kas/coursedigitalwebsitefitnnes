import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';


function Header() {
    return(
        <div className="App">
        <header className="App-header">
        <Link to="/" >
        <img src={logo} className="App-logo" alt="NOSS logo" />
        </Link>
        </header>
        </div>
    );
}

export default Header;