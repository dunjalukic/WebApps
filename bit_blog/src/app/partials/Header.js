import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav>
            <h1>BIT BLOG</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/authors'>Authors</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Header;

