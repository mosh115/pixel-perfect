import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <section className='contact full main-container'>
            <section className='action flex'>
                <h1>Ready to get started? </h1>
                <Link to="/contact" >
                    <button>contact us</button>
                </Link>
            </section>
        </section>
    )
}
