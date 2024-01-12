import React from 'react'
import { projects } from '../../data/projects.js'

//component imports
import ProjectCard from './project'

import './styles.scss'

// this component is used in App
export default function Projects() {

    console.log("projects received from db: ", projects)


    return (
        <div className='container-projects'>
            testing
            {projects.map((project, index) =>

                < ProjectCard key={index} {...project} />

            )}
        </div>
    )
}
