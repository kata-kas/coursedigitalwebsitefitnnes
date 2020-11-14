import Header from '../components/Header';
import Footer from '../components/Footer';

function DespreNoi(){
    return (
        <div style={{backgroundColor:'black' }}>
        <Header/>
        <div style={{ backgroundColor:'black', color:'#fcaf3b', fontFamily:'Poppins', 
        margin: '15%'
    }}>
        <h1>NOSS – Nutriție, Odihnă, Sport, Suplimente</h1>
        <h2>Este un program născut din dorința de a transformă modul în care oamenii privesc sportul, integrându-l în viață celor care l-au urmat.</h2>
        </div>
        <Footer/>
        </div>
    );
}

export default DespreNoi;