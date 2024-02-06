import React from 'react'

import './styles.scss'

//importing icons
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa";

// this component is used in Projects
export default function ProjectCard({ image, title, webLink, codeLink, stack, description, expoSnack, googlePlay }) {

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
                {!!webLink &&
                    <a href={webLink} target='_blank' rel='noreferrer'><TbWorldWww /></a>
                }
                {!!codeLink &&
                    <a href={codeLink} target='_blank' rel="noreferrer"><FaGithub /></a>
                }
                {!!expoSnack &&
                    <a href={expoSnack} target='_blank' rel="noreferrer"><SiExpo /></a>
                }
                {!!googlePlay &&
                    <a href={googlePlay} target='_blank' rel="noreferrer"><FaGooglePlay /></a>
                }
            </div>
        </div >
    )
}
