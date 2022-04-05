import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <nav className='nav'>
                <h3 className='title'> My Book Shop</h3>
                <a href="/">HOME</a>
                <a href="/Reviews">REVIEWS</a>
                <a href="/Dashboard">DASHBOARD</a>
                <a href="/Blogs">BLOGS</a>
                <a href="/About">ABOUT</a>
            </nav>
        </div>
    );
};

export default Header;