import Header from '../components/Header';
import Footer from '../components/Footer';
import NetlifyForm from 'react-ssg-netlify-forms'
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Inscriere(){
    let history=useHistory()
    const postSubmit = () => {
        history.push('/felicitari')}
        const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      tel: ''
    })
    return(
        <div>
        <Header/>
        <NetlifyForm 
        formName="inscriere" formValues={formValues} postSubmit={postSubmit}>
        <div style={{
            backgroundColor:'black', fontFamily:'Poppins', color:'#fcaf3b', padding:'10%', textAlign:'left'
        }}>
        <div>
          Nume Prenume: <input type="text" name="name" value={formValues.name} onChange={handleChange} required />
        </div>
        <div>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="email" name="email" value={formValues.email} onChange={handleChange} required />
        </div>
        <div>
          Nr Telefon:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="tel" name="tel" value={formValues.tel} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit" style={{
              backgroundColor:'#fcaf3b'
          }}>Trimite</button>
        </div>
        </div>
       </NetlifyForm>
        <Footer/>
        </div>
    );
}

export default Inscriere;