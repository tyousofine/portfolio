import React, { useEffect, useState } from 'react'

//component imports
import Matter from './Matter'
import Intro from './Intro'


import './styles.scss'

export default function HeroContainer() {
    const [delayedRender, setDelayedRender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedRender(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);
    return (

        <div className="container-hero">
            {delayedRender && (
                <>
                    <Matter />
                    <Intro />
                </>
            )}
        </div>

    )
}
