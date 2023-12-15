import React, { useState, useEffect } from 'react';
import burger from '../../assets/burger.svg'
import './Navbar.css'

function Navbar(props) {

    const [scrollY, setScrollY] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    useEffect(() => {
        const getScrollY = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", getScrollY);
        const getScrollX = () => setScrollX(window.pageXOffset);
        window.addEventListener("scroll", getScrollX);
    });

    return (
        <>
            <nav className={scrollY > 650 ? 'bg__dark' : 'none'}>
                <div className='menu'>
                    <span className='navbar-title' href="#">
                        Quality
                    </span>
                    <ul className={`links${clicked && (scrollX < 650) ? 'active' : ''}`}>
                        <li><a onClick={handleClick} href="#Home">Home</a></li>
                        <li><a onClick={handleClick} href="#About">About</a></li>
                        <li><a onClick={handleClick} href="#Contact">Contact</a></li>
                        <li><a onClick={handleClick} href="#Service">Service</a></li>
                    </ul>
                    <img onClick={handleClick} src={burger} className="navbar-logo" alt="React logo" />
                </div>
                <section className={`navbar-background${clicked ? 'active' : ''}`}></section>
            </nav >
        </>
    )
}

export default Navbar
