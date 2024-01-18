import React from 'react'
import './styles.scss'

// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

import { RxHamburgerMenu } from "react-icons/rx";




// component used in App.js
export default function NavBar() {
    // const navigate = useNavigate();

    const hamburgerHandler = (event) => {
        event.preventDefault()
        console.log("was clicked")


    }

    return (
        <div>

            <RxHamburgerMenu id='hamburger' onClick={hamburgerHandler} />



            <nav className='container-navbar'>
                <ul className='nav-ul'>
                    <li className='nav-list'>About</li>
                    <li className='nav-list'>Skills</li>
                    <li className='nav-list'>Projects</li>
                    <li className='nav-list'>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
