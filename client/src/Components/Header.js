import React from 'react';

function Header(props) {
    return (
        <header>
            <div className="header-title-wrapper">
                <span className="header-title">RA</span>
            </div>
            <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li className="nav-link"><a href="#home">Home</a></li>
                        <li className="nav-link"><a href="#about">About</a></li>
                        <li className="nav-link"><a href="#contact">Projects</a></li>
                        <li className="nav-link"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
        </header>

    );
}

export default Header;