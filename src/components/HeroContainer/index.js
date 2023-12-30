import React from 'react'
import Matter from './Matter'
import Intro from './Intro'

import './styles.scss'

export default function HeroContainer() {
    return (
        <div className="container-hero">
            <Matter />
            <Intro />
        </div>

    )
}
