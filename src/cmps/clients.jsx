import React from 'react'
import img1 from '../assets/images/logo-the-verge.png'
import img2 from '../assets/images/logo-jakarta-post.png'
import img3 from '../assets/images/logo-the-guardian.png'
import img4 from '../assets/images/logo-tech-radar.png'
import img5 from '../assets/images/logo-gadgets-now.png'

const logos = [img1, img2, img3, img4, img5]

export default function Clients() {
    return (
        <section className='clients full main-container'>
            <h3>Some of our clients</h3>
            <section className='logos flex'>
                {logos.map((logo, idx) => <img src={logo} key={idx}></img>)}
            </section>

        </section>
    )
}
