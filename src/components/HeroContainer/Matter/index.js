import { useEffect, useRef, useState } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js'
import Me from './mebwsm.png';
import Logo from '../../../images/TYlogoTransparent.png';
import OrangeLogo from '../../../images/logoOrange.png';

import './styles.scss'

// this component is used in HeroContainer

function Matter(props) {
    const scene = useRef()
    const isPressed = useRef(false)
    const engine = useRef(Engine.create())
    const render = useRef(null)

    const padding = 30;

    let [meIntervalCount, setMeIntervalCount] = useState(0)
    let [logoIntervalCount, setLogoIntervalCount] = useState(0)
    let [orangeLogoIntervalCount, setOrangeLogoIntervalCount] = useState(0)

    let cw, ch;

    // function to update frame size based on screen size change
    const updateDimensions = () => {
        if (window.innerWidth >= 0 && window.innerWidth < 600) {
            cw = 350;
            ch = 300;
        }

        else if (window.innerWidth >= 600 && window.innerWidth < 750) {
            cw = 400;
            ch = 300;
        }
        else if (window.innerWidth >= 750 && window.innerWidth <= 900) {
            cw = 450;
            ch = 350;
        }

        else if (window.innerWidth > 900) {
            cw = 550
            ch = 350
        } else {
            cw = 350
            ch = 300;
        }
    }

    updateDimensions()

    // render engine. add elements and scene upon loading
    useEffect(() => {
        updateDimensions();
        render.current = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: '#0a0f1b'
            }
        })

        World.add(engine.current.world, [
            //top
            Bodies.rectangle(cw / 2, -10, cw, 20, {
                isStatic: true, render: {
                    strokeStyle: 'transparent'
                }
            }),
            Bodies.rectangle(-10, ch / 2, 20, ch, {
                isStatic: true, render: {
                    strokeStyle: 'transparent',

                }
            }),
            Bodies.rectangle(cw / 2, ch + 10, cw, 20, {
                isStatic: true, render: {
                    strokeStyle: 'transparent'
                }
            }),
            // bottom boundary
            Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
                isStatic: true, render: {
                    strokeStyle: 'transparent',
                }

            }),
        ])

        Engine.run(engine.current)
        Render.run(render.current)

        return () => {
            Render.stop(render.current)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.current.canvas.remove()
            render.current.canvas = null
            render.current.context = null
            render.current.textures = {}
        }
    }, [cw, ch])

    // create and add drop functions for images dropping
    useEffect(() => {
        const createMe = () => World.add(engine.current.world, Bodies.circle(Math.random() * cw, 0, 10 + Math.random() * 20, {
            mass: 10, restitution: 1, friction: 0.005, render: {
                sprite: {
                    texture: Me,
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        }))

        const createLogo = () =>
            World.add(engine.current.world, Bodies.circle(Math.random() * cw, 0, 10 + Math.random() * 20, {
                mass: 10, restitution: 1, friction: 0.005, render: {
                    sprite: {
                        texture: Logo,
                        xScale: 0.4,
                        yScale: 0.4
                    }
                }
            }))
        const createOrangeLogo = () =>
            World.add(engine.current.world, Bodies.circle(Math.random() * cw, 0, 10 + Math.random() * 20, {
                mass: 10, restitution: 1, friction: 0.005, render: {
                    sprite: {
                        texture: OrangeLogo,
                        xScale: 0.4,
                        yScale: 0.4
                    }
                }
            }))

        const dropMe = setInterval(() => {
            createMe();
            setMeIntervalCount(meIntervalCount += 1);

            if (meIntervalCount >= 40) {
                clearInterval(dropMe)
            }

        }, 1000);

        const dropLogo = setInterval(() => {
            createLogo()
            setLogoIntervalCount(logoIntervalCount += 1);

            if (logoIntervalCount >= 10) {
                clearInterval(dropLogo)
            }

        }, 4500);

        const dropOrangeLogo = setInterval(() => {
            createOrangeLogo()
            setOrangeLogoIntervalCount(orangeLogoIntervalCount += 1);

            if (logoIntervalCount >= 5) {
                clearInterval(dropOrangeLogo)
            }

        }, 6000);

        // cleanup
        return () => {
            clearInterval(dropMe)
            clearInterval(dropLogo);
            clearInterval(dropOrangeLogo)
        }

    }, [])

    // touch handling for handhelds
    const handleTouchStart = () => {
        isPressed.current = true;
    }

    const handleTouchEnd = () => {
        isPressed.current = false;
    }

    const handleTouchMove = (e) => {
        if (isPressed.current) {
            const touch = e.touches[0];
            const ball = Bodies.circle(
                touch.clientX,
                touch.clientY,
                10 + Math.random() * 20,
                {
                    mass: 10,
                    restitution: 0.8,
                    friction: 0.005,
                    render: {
                        sprite: {
                            texture: Me,
                            xScale: 0.05,
                            yScale: 0.05,
                        },
                    },
                }
            );
            World.add(engine.current.world, [ball]);
        }
    }

    // mouse handle function for desktops
    const handleMouseDown = (e) => {
        e.preventDefault();
        isPressed.current = true
    }

    const handleMouseUp = (e) => {
        e.preventDefault();
        isPressed.current = false
    }

    const handleAddCircle = e => {

        if (isPressed.current) {
            const ball = Bodies.circle(
                e.clientX,
                e.clientY,
                10 + Math.random() * 20,
                {
                    mass: 10,
                    restitution: 0,
                    friction: 0.005,
                    render: {
                        sprite: {
                            texture: Me,
                            xScale: 0.05,
                            yScale: 0.05

                        }
                    }
                })
            World.add(engine.current.world, [ball])
        }
    }

    return (
        <div className='container-matter' style={{ width: { cw } }}>
            <>
                <div
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleAddCircle}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={e => console.log('onTouchCancel')}
                >

                    <div className='scene' ref={scene} ></div>
                </div>
                {/* <form className='resetBtn'><button onClick={updateDimensions} >Reset</button></form> */}
            </>

        </div>
    )
}

export default Matter