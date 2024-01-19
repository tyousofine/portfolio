import React from 'react'

import './styles.scss'

// icon imports
import { FaEnvelope } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='tradeMark'>
                <span>&lt;TY/&gt;</span>
                <span> creations</span>
            </div>

            <div className='contact-icons'>
                <FaEnvelope />
                <FaGithubSquare />
                <FaLinkedin />
            </div>
        </div>
    )
}
