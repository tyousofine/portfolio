import React from 'react'

import './styles.scss'

//importing icons
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

// this component is used in Projects
export default function ProjectCard({ image, title, webLink, codeLink, stack, description }) {

    return (
        <div className='project'>
            <img src={image} alt="asdf" />
            <div className="stackList">
                <>{stack.map((stack, index) => (
                    <p key={index}>{stack}</p>
                ))}</>
            </div>
            <h3>{title}</h3>
            <p className='description'>{description}</p>
            <div className='links'>
                <a href={webLink} target='_blank' rel="noreferrer"><FaGithub /></a>
                <a href={codeLink} target='_blank' rel='noreferrer'><TbWorldWww /></a>
            </div>
        </div >
    )
}
