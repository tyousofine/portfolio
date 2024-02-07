import React from 'react'

import './styles.scss'

// component imports 
import SectionTitle from '../SectionTitle';

//icon imports
import { MdOutlineRunningWithErrors } from "react-icons/md";
import * as FaIcons from "react-icons/fa"
import * as SiIcon from 'react-icons/si'

import * as TbBrand from "react-icons/tb";



export default function Skills() {

    // custom component for react Icons
    const ReactIcon = ({ iconName, className, text }) => {
        let Icon = ''
        if (FaIcons[iconName]) {
            Icon = FaIcons[iconName]
        } else if (SiIcon[iconName]) {
            Icon = SiIcon[iconName]
        } else if (TbBrand[iconName]) {
            Icon = TbBrand[iconName]
        }

        // add other cases here if different icon libraries used

        else {
            Icon = MdOutlineRunningWithErrors
            text = '...'
        }

        return <div className='icon-container'><Icon className={className} /><p>{text}</p></div>
    }

    return (
        <div className='skills' id='skills'>
            <SectionTitle sectionTitle={"Skills"}></SectionTitle>
            <div className="container-skills">
                <div className='skill-section'>
                    <ReactIcon iconName="FaHtml5" className="icon" text="HTML5" />
                    <ReactIcon iconName="FaCss3Alt" className="icon" text="CSS3" />
                    <ReactIcon iconName="FaSass" className="icon" text="Sass" />
                    <ReactIcon iconName="SiTailwindcss" className="icon" text="Tailwind" />
                </div>
                <div className='skill-section'>
                    <ReactIcon iconName="SiJavascript" className="icon" text="Javascript" />
                    <ReactIcon iconName="FaReact" className="icon" text="React" />
                    <ReactIcon iconName="TbBrandReactNative" className="icon" text="React Native" />
                    <ReactIcon iconName="FaAngular" className="icon" text="Angular" />
                </div>
                <div className="skill-section">
                    <ReactIcon iconName="SiNextdotjs" className="icon" text="Next.js" />
                    <ReactIcon iconName="SiD3Dotjs" className="icon" text="D3.js" />
                    <ReactIcon iconName="SiMatterdotjs" className="icon" text="Matter.js" />
                </div>
                <div className="skill-section">
                    <ReactIcon iconName="FaWordpress" className="icon" text="WordPress" />
                </div>
                <div className='skill-section'>
                    <ReactIcon iconName="SiMysql" className="icon" text="MySql" />
                    <ReactIcon iconName="SiFirebase" className="icon" text="Firebase" />
                    <ReactIcon iconName="SiMongodb" className="icon" text="MongoDB" />
                    <ReactIcon iconName="FaPhp" className="icon" text="PHP" />
                    <ReactIcon iconName="FaNodeJs" className="icon" text="NodeJs" />
                </div>
                <div className="skill-section">
                    <ReactIcon iconName="FaGitAlt" className="icon" text="Git" />
                    <ReactIcon iconName="FaGithub" className="icon" text="GitHub" />
                    <ReactIcon iconName="FaBitbucket" className="icon" text="Bitbucket" />
                </div>
                <div className="skill-section">
                    <ReactIcon iconName="SiCanva" className="icon" text="Canva" />
                    <ReactIcon iconName="FaFigma" className="icon" text="Figma" />
                    <ReactIcon iconName="SiAdobephotoshop" className="icon" text="Photoshop" />
                    <ReactIcon iconName="SiAdobeillustrator" className="icon" text="Illustrator" />
                </div>
            </div>
        </div>
    )
}
