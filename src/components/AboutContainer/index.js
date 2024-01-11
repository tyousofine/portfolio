import React from 'react'

import './styles.scss'

// components
import About from './About'
import Slogan from './Slogan'



export default function AboutContainer() {
    return (
        <div className='container-about'>
            <Slogan />
            <About />
        </div>
    )
}
