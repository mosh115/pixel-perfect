import React, { useEffect } from 'react'
import { AboutItem } from '../cmps/about-item'
import { FormContact } from '../cmps/form-contact.jsx'
import img1 from '../assets/images/icon-person.svg'
import img2 from '../assets/images/icon-cog.svg'
import img3 from '../assets/images/icon-chart.svg'

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const cards = [
        { title: '', text: 'The quality of our talent network', img: img1 },
        { title: '', text: 'Usage & implementation of our software', img: img2 },
        { title: '', text: 'How we help drive innovation', img: img3 }
    ]
    return (
        <section className='contact-page full main-container '>
            <section className='contact-container flex column'>
                <section className='ask-about flex column'>
                    <h1>Contact</h1>
                    <h4>Ask as about</h4>
                    <div>
                        {cards.map(card => <AboutItem card={card} key={card.text} />)}
                    </div>
                </section>
                <FormContact />
            </section>
        </section>
    )
}
