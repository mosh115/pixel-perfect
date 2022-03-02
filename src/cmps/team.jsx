import React from 'react';
import { TeamItem } from './team-item';
import img1 from '../assets/images/avatar-kady.jpg'
import img2 from '../assets/images/avatar-aiysha.jpg'
import img3 from '../assets/images/avatar-arthur.jpg'



export default function Team() {
    const members = [
        { name: 'Kady Baker', title: 'Product Manager at Bookmark', text: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”', img: img1 },
        { name: 'Aiysha Reese', title: 'Founder of Manage', text: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”.', img: img2 },
        { name: 'Arthur Clarke', title: 'Co-founder of MyPhysio', text: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”', img: img3 }
    ]
    return (
        <section className='team full main-container'>
            <h2>Delivering real results for top companies. Some of our <span>success stories.</span> </h2>
            <section className='the-team flex'>
                {members.map(member => <TeamItem card={member} key={member.name} />)}
            </section>
        </section>
    );
}

