import React from 'react'

import './styles.scss'

// components
import About from './About'
import Slogan from './Slogan'
import SectionTitle from '../SectionTitle'



export default function AboutContainer() {
    return (
        <div className='container-about'>
            <SectionTitle sectionTitle={"About"} />
            <Slogan />
            <About />
        </div>
    )
}
