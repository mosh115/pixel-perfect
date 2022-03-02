import React, { useEffect } from 'react';
import About from '../cmps/about.jsx';
import Contact from '../cmps/contact.jsx';
import Hero from '../cmps/hero.jsx';
import Team from '../cmps/team.jsx';



export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='home-page full main-container'>
            <Hero />
            <About />
            <Team />
            <Contact />
        </div>
    )
}
