import Header from '../components/Header';
import Footer from '../components/Footer';
import NetlifyForm from 'react-ssg-netlify-forms'
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { motion } from 'framer-motion'

function Inscriere(){
    let history=useHistory()
    const postSubmit = () => {
        history.push('/plata')}
        const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      tel: ''
    })
    return(
        <motion.div  className="css-selector"
        style={{ backgroundColor:'rgb(29, 29, 29)', fontFamily:'Raleway', color:'#CA2000',fontWeight:'500', textAlign:'center', paddingTop:'10rem', 
      }} >
        <Header/>
        <h1>Inscriere</h1>
        <NetlifyForm className="product"
        formName="inscriere" formValues={formValues} postSubmit={postSubmit}>
        <div style={{
           textAlign:'center', height:'100vh', paddingTop:'5rem', 
        }}>
        <div>
          Nume Prenume: <br/> <input type="text" name="name" value={formValues.name} onChange={handleChange} required />
        </div>
        <div>
          Email: <br/><input type="email" name="email" value={formValues.email} onChange={handleChange} required />
        </div>
        <div>
          Nr Telefon:<br/><input type="tel" name="tel" value={formValues.tel} onChange={handleChange} required />
        </div>
        <div>
          <input type="checkbox" required/> Sunt deacord cu <br/> Termenii si conditiile
        </div>
        <br/>
        <br/>
        <div>
          <button
          type="submit" className="Btn"style={{
              backgroundColor:'#CA2000', marginTop:'5%'
          }}>Trimite</button>
        </div>
        </div>
       </NetlifyForm>
        <Footer/>
        </motion.div>
    );
}

export default Inscriere;