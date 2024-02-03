import React from 'react'
import './styles.scss'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon imports
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";


// this component is used in App.js
export default function NavBar() {
    const navigate = useNavigate();
    const [isShowing, setIsShowing] = useState(true)


    const closeMenuHandler = (e) => {
        e.preventDefault();
        navigate('/')
        setIsShowing(!isShowing)
    }


    const hamburgerHandler = (event) => {
        event.preventDefault()
        setIsShowing(!isShowing)

    }

    return (
        <div className='container-navbar'>

            {/* hamburger menu and pop up links for mobile size */}
            {!!isShowing ? (
                <RxHamburgerMenu onClick={hamburgerHandler} className='hamburger' />

            ) : (

                <div className="container-hamburger">
                    <ImCross onClick={closeMenuHandler} />
                    <ul>
                        <a href="#form-contact" onClick={() => setIsShowing(true)} ><li>Contact</li></a>
                        <a href="#container-projects" onClick={() => setIsShowing(true)}><li>Projects</li></a>
                        <a href="#skills" onClick={() => setIsShowing(true)}><li>Skills</li></a>
                        <a href="#container-about" onClick={() => setIsShowing(true)}><li>About</li></a>
                    </ul>
                </div>
            )}

            {/* navbar for desktop size */}
            <nav className='navbar'>
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
