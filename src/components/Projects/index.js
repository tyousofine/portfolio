import React from 'react'
import { projects } from '../../data/projects.js'

//component imports
import ProjectCard from './project'
import SectionTitle from '../SectionTitle/index.js'

import './styles.scss'

// this component is used in App
export default function Projects() {



    return (
        <div className='container-projects' id='container-projects'>
            <SectionTitle sectionTitle={"Projects"} />
            <div className="innerContainer-projects">
                {projects.map((project, index) =>
                    < ProjectCard key={index} {...project} />
                )}
            </div>
        </div>
    )
}
