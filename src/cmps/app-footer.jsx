import React from 'react';
import { ReactComponent as IconTwitter } from '../assets/images/icon-twitter.svg'
import { ReactComponent as IconFacebook } from '../assets/images/icon-facebook.svg'
import { ReactComponent as IconPinterest } from '../assets/images/icon-pinterest.svg'
import logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';

export default function AppFooter() {
    return (
        <div className='app-footer full main-container'>
            <footer className='footer flex'>
                <section className='brand'>
                    <img className='logo' src={logo} alt='logo'></img>
                    <nav className='flex'>
                        <NavLink to="/">home</NavLink>
                        <NavLink to="about">about</NavLink>
                    </nav>
                </section>

                <small className='address'>
                    987  Hillcrest Lane <br />
                    Irvine, CA<br />
                    California 92714<br />
                    Call Us : 949-833-7432<br />
                </small>
                <section>
                    <section className='social flex'>
                        <IconFacebook />
                        <IconPinterest />
                        <IconTwitter />
                    </section>
                    <small>
                        Copyright 2020. All Rights Reserved
                    </small>
                </section>
            </footer>
        </div >
    )
}
