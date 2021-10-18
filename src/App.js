import './App.css';
// Components Imports
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import WhyUs from './Components/WhyUs/WhyUs';
import PopularCourses from './Components/PopularCourses/PopularCourses';
import Testimonials from './Components/Testimonials/Testimonials';
import Faq from './Components/FrequentlyAskedQuestion/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <WhyUs />
      <PopularCourses />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
