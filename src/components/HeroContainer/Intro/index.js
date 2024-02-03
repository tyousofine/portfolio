import React from 'react'

import ContactLink from '../ContactLink'

import './styles.scss'

// Component used in HeroContainer
export default function Intro() {
    return (
        <div className='intro'>
            <h1>Tina Youssefian</h1>
            <h2>Web Developer</h2>
            <ContactLink />
        </div>
    )
}
