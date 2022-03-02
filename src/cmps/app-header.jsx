import React, { useState } from 'react';
import logo from '../assets/images/logo.svg'
import { NavLink, Link } from "react-router-dom";

export default function AppHeader() {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <section className='app-header flex'>
            <NavLink to="/"><img className='logo' src={logo} alt='logo'></img></NavLink>
            <section className={isNavOpen ? 'nav menu-open' : 'nav'} >
                <button onClick={() => setIsNavOpen(!isNavOpen)} className='close-menu'>+</button>
                <NavLink onClick={() => setIsNavOpen(!isNavOpen)} to="/">home</NavLink>
                <NavLink onClick={() => setIsNavOpen(!isNavOpen)} to="about">about</NavLink>
                <Link className='btn-contact' to="contact" >
                    <button onClick={() => setIsNavOpen(!isNavOpen)} className=''>contact us</button>
                </Link>
            </section>
            <button onClick={() => setIsNavOpen(!isNavOpen)} className='btn-nav'>☰</button>
            <div onClick={() => setIsNavOpen(!isNavOpen)} className={isNavOpen ? 'black-screen open' : 'black-screen'} ></div>

        </section>
    );
}
