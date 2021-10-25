import React from 'react';
import './Header.css';
import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='header__container center'>
        <div className='logo'>
          {/* <a href='index.html'>Codewitheras</a> */}
          <Link to='/home'>Codewitheras</Link>
        </div>
        <nav id='menu'>
          {/* Import React-router-dom and change all the <a href=''></a> to <Link to=''>Link to navigate to </Link> */}
          {/* <a href='/about_us'>About us</a>
          <a href='/coursePages/courses.html'>All Courses</a>
          <a href='/auth/signup.html'>Log in/Sign up</a> */}
          <Link to='/aboutUs' className='header__link'>
            About Us
          </Link>
          <Link to='/courses' className='header__link'>
            Courses
          </Link>
          <Link to='/auth' className='header__link'>
            SignIn / SignUp
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
