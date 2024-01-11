import React from 'react'

import './styles.scss'

//icon imports
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa"
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMatterdotjs } from "react-icons/si";
import { SiD3Dotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di"

export default function Skills() {
    return (
        <div className='skills'>

            <div className='frontEnd'>
                <FaHtml5 size={50} color='#00FFFF' />
                <p>HTML5</p>

                <FaCss3Alt size={50} color='#00FFFF' />
                <p>CSS3</p>

                <FaSass size={50} color='#00FFFF' />
                <p>CSS3</p>





                <SiTailwindcss size={50} color='#00FFFF' />
                <p>Tailwind</p>
            </div>
            <div className='javascript'>
                <IoLogoJavascript size={50} color='#00FFFF' />
                <p>Javascript</p>

                <FaReact size={50} color='#00FFFF' />
                <p>React</p>

                <FaAngular size={50} color='#00FFFF' />
                <p>Angular</p>

                <TbBrandNextjs size={50} color='#00FFFF' />
                <p>Nextjs</p>

                <SiMatterdotjs size={50} color='#00FFFF' />
                <p>Matter.js</p>

                <SiD3Dotjs size={50} color='#00FFFF' />
                <p>D3.js</p>
            </div>

            <div className="cms">
                <FaWordpress size={50} color='#00FFFF' />
                <p>WordPress</p>
            </div>

            <div className='backEnd'>
                <TbBrandMysql size={50} color='#00FFFF' />
                <p>MySql</p>
                <IoLogoFirebase size={50} color='#00FFFF' />
                <p>Firebase</p>
                <SiMongodb size={50} color='#00FFFF' />
                <p>Mongodb Atlas</p>
                <FaPhp size={50} color='#00FFFF' />
                <p>PHP</p>
                <FaNodeJs size={50} color='#00FFFF' />
                <p>NodeJs</p>
            </div>

            <div className="tools">
                <FaGitAlt size={50} color='#00FFFF' />
                <p>Git</p>
                <FaGithub size={50} color='#00FFFF' />
                <p>GitHub</p>
                <FaBitbucket size={50} color='#00FFFF' />
                <p>Bitbucket</p>
                <FaDocker size={50} color='#00FFFF' />
                <p>Docker</p>
            </div>

            <div className="design">
                <SiCanva size={50} color='#00FFFF' />
                <p>Canva</p>
                <FaFigma size={50} color='#00FFFF' />
                <p>Figma</p>
                <DiPhotoshop size={50} color='#00FFFF' />
                <p>Photoshop</p>
                <DiIllustrator size={50} color='#00FFFF' />
                <p>Illustrator</p>
            </div>



        </div>
    )
}
