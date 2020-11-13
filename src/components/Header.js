import logo from '../assets/logo.svg';
import Link from 'react-dom';
function Header() {
    return(
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="NOSS logo" />
        </header>
        </div>
    );
}

export default Header;