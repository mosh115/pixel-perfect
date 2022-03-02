import React from 'react';

export function TeamItem({ card }) {
    return (
        <section className='team-item flex column'>
            <p>{card.text}</p>
            <h3>{card.name}</h3>
            <h4>{card.title}</h4>
            <img src={card.img} alt='team'></img>
        </section>
    );
}
