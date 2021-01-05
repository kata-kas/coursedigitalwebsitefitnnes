import Header from '../components/Header';
import Footer from '../components/Footer';
import PlataOPlomo from '../components/PlataOPlomo';
import CartSummary from '../components/CartSummary';

export default function Plata(){

    return(
        <div style={{backgroundColor:'rgb(29, 29, 29)',  color:'orange', textAlign:'center',  fontFamily:'Raleway' }}>
        <Header/>
        <h1 style={{marginTop:'5%'}}
        >Coș</h1>
        <div style={{backgroundColor:'rgb(29, 29, 29)', color:'orange', textAlign:'center', border: '1px solid #CA2000',
        fontFamily:'Raleway', margin:'10%', padding:'10%'}}>
        <PlataOPlomo/>
        <CartSummary/>
        </div>
         <Footer/>
        </div>
    )
}