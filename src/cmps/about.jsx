import React from 'react';
import { AboutItem } from './about-item';
import img1 from '../assets/images/icon-person.svg'
import img2 from '../assets/images/icon-cog.svg'
import img3 from '../assets/images/icon-chart.svg'



export default function About() {
    const cards = [
        { title: 'Experienced Individuals', text: 'Our network is made up of highly experienced professionals who are passionate about what they do.', img: img1 },
        { title: 'Easy to Implement', text: 'Our processes have been refined over years of implementation meaning our teams always deliver.', img: img2 },
        { title: 'Enhanced Productivity', text: 'Our customized platform with in-built analytics helps you manage your distributed teams..', img: img3 }
    ]
    return (
        <section className='about full main-container'>
            <section className='flex'>
                <h2><span className='line'></span>Build & manage distributed teams like no one else.</h2>
                <div>
                    {cards.map(card => <AboutItem card={card} key={card.title} />)}
                </div>
            </section>
        </section>
    );
}
