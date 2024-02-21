import React from 'react'
import Matter from './Matter'
import Intro from './Intro'
import ContactLink from './ContactLink'

import './styles.scss'

export default function HeroContainer() {
    return (
        <div className="halfCircle">
            <div className="container-hero">
                <Matter />
                <Intro />
            </div>
        </div>

    )
}
