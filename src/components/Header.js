import logo from '../assets/logo.svg';
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