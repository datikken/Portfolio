import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
                <div className="w3-bar w3-black navbar">
                    <Link to="/" className="w3-bar-item">Tikken</Link>
                    <Link to="/Contact" className="w3-bar-item w3-right">Cвязаться</Link>
                    <Link to="/MyWork" className="w3-bar-item w3-right">Мои работы</Link>
                </div>
        </div>
    )
}

export default NavBar;