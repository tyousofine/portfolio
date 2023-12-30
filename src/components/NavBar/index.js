import React from 'react'
import './styles.scss'


// component used in App.js
export default function NavBar() {
    return (
        <nav className='container-navbar'>

            <ul className='nav-ul'>
                <li className='nav-list'>About</li>
                <li className='nav-list'>Skills</li>
                <li className='nav-list'>Projects</li>
                <li className='nav-list'>Contact</li>
            </ul>

        </nav>
    )
}
