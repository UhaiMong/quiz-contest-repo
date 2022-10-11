import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="header-title">
                <h3>Quiz Contest</h3>
            </div>
            <div className="nav-rout">
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;