import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div class="header__container center">
                <div class="logo">
                    <a href="index.html">Codewitheras</a>
                </div>
                <nav id="menu">
                {/* Import React-router-dom and change all the <a href=''></a> to <Link to=''>Link to navigate to </Link> */}
                    <a href="/about_us.html">About us</a>
                    <a href="/coursePages/courses.html">All Courses</a>
                    <a href="/auth/signup.html">Log in/Sign up</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
