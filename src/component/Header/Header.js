import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <nav >
                <h1 className='title' > My Book Shop</h1>
                <div className='nav'>
                <a href="/">HOME</a>
                <a href="/Reviews">REVIEWS</a>
                <a href="/Dashboard">DASHBOARD</a>
                <a href="/Blogs">BLOGS</a>
                <a href="/About">ABOUT</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;