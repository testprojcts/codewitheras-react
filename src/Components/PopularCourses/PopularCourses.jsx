import React from 'react';
import './PopularCourses.css';
import AmazonClone from './../../assets/Amazon-clone.png';
import NetflixClone from './../../assets/Netflix-clone.png';

const PopularCourses = () => {
  return (
    <section className='popular__className'>
      <div className='course-container'>
        <div className='course-hd'>
          <h3>Popular Courses</h3>
          <p>
            We never limit our usage. You can host as many courses and students
            as you want, with no extra charges.
          </p>
        </div>
        <div className='course-cards'>
          <div className='course-card'>
            <div className='course_img'>
              <img src={NetflixClone} alt='' />
            </div>
            <div className='card-info'>
              <h4>Amazon Clone</h4>
              <p>
                Rebuild the world's most famous shopping website Amazon using
                basic coding language.
              </p>
              <a href='courseClones/amazon_clone.html'>View Course</a>
            </div>
          </div>
          <div className='course-card'>
            <div className='course_img'>
              <img src={AmazonClone} alt='' />
            </div>
            <div className='card-info'>
              <h4>Facebook Clone</h4>
              <p>
                Rebuild the world's most social media platform Facebook with
                basic cosing language.
              </p>
              <a href='courseClones/facebook_clone.html'>View Course</a>
            </div>
          </div>
          <div className='course-card'>
            <div className='course_img'>
              <img src={NetflixClone} alt='' />
            </div>
            <div className='card-info'>
              <h4>Github Clone</h4>
              <p>
                Rebuild the world's most project management platform Github with
                basic coding language.
              </p>
              <a href='courseClones/github_clone.html'>View Course</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
