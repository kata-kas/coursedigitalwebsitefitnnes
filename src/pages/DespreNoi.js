import Header from '../components/Header';
import Footer from '../components/Footer';
import Typed from 'react-typed';

function DespreNoi(){
    return (
       <div>
         <Header/>
         <div style={{height:'100vh',   backgroundColor: 'rgb(29, 29, 29)', position:'relative'
}}>     
        <div style={{
         textAlign:'center', position:'absolute', top:'25%', left:'50%', transform:'translate(-50%,-25%)', fontSize:'72px', color:'#CA2000'
        }}>
        <Typed
                    strings={[
                      "Nutritie",
                      "Odihna",
                      "Sport",
                      "Suplimente"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                    showCursor={false}
                  />
        </div>
        <div style={{
         textAlign:'left', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', color:'#881700'
        }}>
        Este un program născut din dorința de a transforma modul în care oamenii privesc sportul, integrându-l în viața celor care l-au urmat.
        </div>
         </div>
         <Footer/>
       </div>
    );
}

export default DespreNoi;