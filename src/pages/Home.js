import '../App.css';
import Benefits from '../components/Benefits';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion'

function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}>

     <div className="App">
       <video autoPlay loop muted id="background-video">
      <source src='https://storage.googleapis.com/kreativio/video.mp4' type='video/mp4' />
    </video>
        <div className="Container" style={{height:'100vh'}}>
        <Header/>
          <motion.div initial="hidden"
    animate="visible"
    variants={variants}
    transition={{duration:5}}
    style={{position:'absolute', top:'50%', left:'50%',  transform: 'translate( -50%, -50%)', fontSize: '70px', fontWeight: '800', lineHeight: '1.3em', color:'#CA2000', width:'70%'
  , padding:'0.5%', textAlign:'center'}}
    >
          NOSS te ajută să fii în formă maximă! 
          <br/>
          <br/>
          </motion.div> 
          <div>
          <Link to="/despre-noi" className="Btn" style={{textDecoration:'none'}}>
          AFLĂ CUM!
          </Link></div>
          
      </div>
      </div>
    <Benefits/>
    <section className="videostore">
    <video preload="none" controls poster="https://storage.googleapis.com/kreativio/banner.jpg" id="bun-venit">
      <source src='https://storage.googleapis.com/kreativio/Bun%20venit.mp4' type='video/mp4' />
    </video>
    </section>
    <CourseCard/>
    <Footer/>
    <script id="CookieDeclaration" src="https://consent.cookiebot.com/98f96dbb-884d-4981-bd1e-59204bc2e36a/cd.js" type="text/javascript" async></script>
    </motion.div>
      );
}

export default Home;
