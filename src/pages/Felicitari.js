import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../assets/logo.svg';

function Felicitari(){
    return(
        <div>
        <Header/>
        <div
        style={{backgroundColor: 'black', fontFamily:'Poppins', color:'#fcaf3b',
         padding:'10%', lineHeight:'15px'
         }}>
        <h1 >Felicitări!</h1>

        <p>Te-ai înscris în cursul <strong>"Fitness pentru începători"</strong></p>

        <p>Cursul se va ține pe aplicația <a href="https://telegram.org/" target="blank" style={{textDecoration:'none', color:'yellow'}} >Telegram</a>. Dacă nu ai cont pe această aplicație, te rugăm să îți creezi unul.</p>

        <p>Călătoria ta spre o viață mai sănătoasă începe acum!</p>

        <p><em>Cu drag,</em></p>

        <p><strong>Echipa NOSS</strong></p>
        <img src={logo} style={{marginTop: '15px'}} className="App-logo" alt="NOSS logo" />
        </div>
        <Footer/>
        </div>
    );
}

export default Felicitari;