import React from 'react'
import imgNikita from '../assets/images/avatar-nikita.jpg'
import imgCristian from '../assets/images/avatar-christian.jpg'
import imgCruz from '../assets/images/avatar-cruz.jpg'
import imgDrake from '../assets/images/avatar-drake.jpg'
import imgGriffin from '../assets/images/avatar-griffin.jpg'
import imgAden from '../assets/images/avatar-aden.jpg'
import DirectorItem from './director-item'

export default function Directors() {
    const directors = [
        { title: 'Founder & CEO', name: 'Nikita Marks', img: imgNikita, text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”' },
        { title: 'Co-founder & COO', name: 'Cristian Ducan', img: imgCristian, text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”' },
        { title: 'Co-founder & CTO', name: 'Cruz Hamer', img: imgCruz, text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”' },
        { title: 'Business Development Lead', name: 'Drake Heaton', img: imgDrake, text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”' },
        { title: 'Lead Marketing', name: 'Griffin Wise', img: imgGriffin, text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”' },
        { title: 'Head of coffee', name: 'Aden Allan', img: imgAden, text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”' },
    ]
    return (
        <section className='directors full main-container'>
            <h1>Meet the directors</h1>
            <section className='director-container'>
                {directors.map(director => <DirectorItem director={director} key={director.name} />)}
            </section>
        </section>
    )
}
