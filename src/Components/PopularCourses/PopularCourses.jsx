import React from 'react';
import './PopularCourses.css';
import AmazonClone from './../../assets/Amazon-clone.png';
import NetflixClone from './../../assets/Netflix-clone.png';

const PopularCourses = () => {
  return (
    <section class='popular__class'>
      <div class='course-container'>
        <div class='course-hd'>
          <h3>Popular Courses</h3>
          <p>
            We never limit our usage. You can host as many courses and students
            as you want, with no extra charges.
          </p>
        </div>
        <div class='course-cards'>
          <div class='course-card'>
            <div class='course_img'>
              <img src={NetflixClone} alt='' />
            </div>
            <div class='card-info'>
              <h4>Amazon Clone</h4>
              <p>
                Rebuild the world's most famous shopping website Amazon using
                basic coding language.
              </p>
              <a href='courseClones/amazon_clone.html'>View Course</a>
            </div>
          </div>
          <div class='course-card'>
            <div class='course_img'>
              <img src={AmazonClone} alt='' />
            </div>
            <div class='card-info'>
              <h4>Facebook Clone</h4>
              <p>
                Rebuild the world's most social media platform Facebook with
                basic cosing language.
              </p>
              <a href='courseClones/facebook_clone.html'>View Course</a>
            </div>
          </div>
          <div class='course-card'>
            <div class='course_img'>
              <img src={NetflixClone} alt='' />
            </div>
            <div class='card-info'>
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
