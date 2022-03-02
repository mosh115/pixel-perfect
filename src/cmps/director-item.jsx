import React, { useState } from 'react'
import { ReactComponent as ImgTwitter } from '../assets/images/icon-twitter.svg'
import { ReactComponent as ImgLinkedin } from '../assets/images/icon-linkedin.svg'

export default function DirectorItem({ director }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  return (
    <section className='director-item '>
      {!isDetailsOpen &&
        <section>
          <img src={director.img}></img>
          <h3>{director.name}</h3>
          <p className='title'>{director.title}</p>
        </section>
      }
      {isDetailsOpen && <section className='director-item open' >
        <h3>{director.name}</h3>
        <p className='text'>{director.text}</p>
        <section >
          <ImgTwitter />
          <ImgLinkedin />
        </section>
      </section>}
      <button className={isDetailsOpen ? 'click' : ''} onClick={() => setIsDetailsOpen(!isDetailsOpen)}>+</button>
    </section>
  )
}
