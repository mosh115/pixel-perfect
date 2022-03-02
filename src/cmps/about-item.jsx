import React from 'react';

export function AboutItem({ card }) {
    return (
        <div className='about-item flex'>
            <img src={card.img} alt='img'></img>
            <section>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
            </section>
        </div>
    );
}
