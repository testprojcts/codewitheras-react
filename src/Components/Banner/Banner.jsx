import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <section class="banner center">
                <div class="banner__content">
                    <div class="banner-txt">
                        <div class="hd">
                            <h3>Fast-Track your</h3>
                            <h3>Career with Hands-On</h3>
                            <h3>Coding Courses</h3>
                        </div>
                        <div class="cta">
                            <a href="coursePages/courses.html" class="cta-btn">Explore Courses</a>
                        </div>
                        <div class="banner__img">
                            <img src="/assets/auto_img_1633698527005.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
