import React from 'react';
import './Banner.css';
import BannerImg from './../../assets/BannerImg.png';

const Banner = () => {
  return (
    <section className='banner center'>
      <div className='banner__content'>
        <div className='banner-txt'>
          <div className='hd'>
            <h3>Fast-Track your</h3>
            <h3>Career with Hands-On</h3>
            <h3>Coding Courses</h3>
          </div>
          <div className='cta'>
            <a href='coursePages/courses.html' className='cta-btn'>
              Explore Courses
            </a>
          </div>
        </div>
        <div className='banner__img'>
          <img src={BannerImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
