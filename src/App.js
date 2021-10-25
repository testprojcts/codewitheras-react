import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom';
// Components Imports
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import WhyUs from './Components/WhyUs/WhyUs';
import PopularCourses from './Components/PopularCourses/PopularCourses';
import Testimonials from './Components/Testimonials/Testimonials';
import Faq from './Components/FrequentlyAskedQuestion/Faq';
import Footer from './Components/Footer/Footer';

// React Router Importation
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' component={App} />
          <Route path='/banner' exact component={Banner} />
          <Route path='/whyUs' exact component={WhyUs} />
          <Route path='/popularCourses' exact component={PopularCourses} />
          <Route path='/testimonials' exact component={Testimonials} />
          <Route path='/faq' exact component={Faq} />
          <Route path='/footer' exact component={Footer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
