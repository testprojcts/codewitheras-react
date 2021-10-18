import React from 'react';
import './Banner.css';
import BannerImg from '.././../assets/BannerImg.png';

const Banner = () => {
  return (
    <section class='banner center'>
      <div class='banner__content'>
        <div class='banner-txt'>
          <div class='hd'>
            <h3>Fast-Track your</h3>
            <h3>Career with Hands-On</h3>
            <h3>Coding Courses</h3>
          </div>
          <div class='cta'>
            <a href='coursePages/courses.html' class='cta-btn'>
              Explore Courses
            </a>
          </div>
          <div class='banner__img'>
            <img src={BannerImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
