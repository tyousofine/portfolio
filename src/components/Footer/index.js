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
                <a href="mailto:tyoussefian@gmail.com"><FaEnvelope /></a>
                <a href="https://github.com/tyousofine"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/tyoussefian"><FaLinkedin /></a>
            </div>
        </div>
    )
}
