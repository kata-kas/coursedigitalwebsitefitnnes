import '../App.css';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
    <Header/>
    <Banner/>
     
    <Benefits/>
    <CourseCard/>
    <Footer/>
     </div>
      );
}

export default Home;
