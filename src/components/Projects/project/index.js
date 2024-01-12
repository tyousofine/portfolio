import React from 'react'

import './styles.scss'

// this component is used in Projects
export default function ProjectCard({ image, title, webLink, codeLink, stack, description }) {

    return (
        <div className='project'>
            <img src={image} alt="asdf" />
            <h3>{title}</h3>
            <p>{stack}</p>
            <p>{description}</p>
            <div>
                <a href="#">{webLink}</a>
                <a href="#">{codeLink}</a>
            </div>
        </div>
    )
}
