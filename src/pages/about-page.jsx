import React, { useEffect } from 'react'
import AboutUs from '../cmps/about-us'
import Clients from '../cmps/clients'
import Contact from '../cmps/contact'
import Directors from '../cmps/directors'

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='about-page full main-container '>
            <AboutUs />
            <Directors />
            <Clients />
            <Contact />
        </section>
    )
}
