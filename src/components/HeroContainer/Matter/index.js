import { useEffect, useRef, useState } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js'
import Logo from './mebwsm.png'

import './styles.scss'

// this component is used in HeroContainer

function Matter(props) {
    const scene = useRef()
    const isPressed = useRef(false)
    const engine = useRef(Engine.create())
    const render = useRef(null)

    const padding = 10;

    let [intervalCount, setIntervalCount] = useState(0)

    let cw, ch;

    const updateDimensions = () => {
        if (window.innerWidth > 600) {
            cw = window.innerWidth / 2.7 - padding;
        } else {
            cw = window.innerWidth - padding
        }
        ch = 300;

    }

    updateDimensions()


    useEffect(() => {
        updateDimensions();
        // const radius = Math.min(cw, ch) / 2 - padding;

        render.current = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,

                wireframes: false,
                // background: '#1b1c1c'
                // background: '#1e293b'
                background: '#0a0f1b'
            }
        })

        World.add(engine.current.world, [
            Bodies.rectangle(cw / 2, -10, cw, 20, {
                isStatic: true, render: {
                    strokeStyle: '#111'
                }
            }),
            Bodies.rectangle(-10, ch / 2, 20, ch, {
                isStatic: true, render: {
                    strokeStyle: '#111',

                }
            }),
            Bodies.rectangle(cw / 2, ch + 10, cw, 20, {
                isStatic: true, render: {
                    strokeStyle: '#111'
                }
            }),
            // bottom boundary
            Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
                isStatic: true, render: {
                    strokeStyle: '#111',
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

    useEffect(() => {
        const createBall = () => World.add(engine.current.world, Bodies.circle(Math.random() * cw, 0, 10 + Math.random() * 20, {
            mass: 10, restitution: 1, friction: 0.005, render: {
                sprite: {
                    texture: Logo,
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        }))

        const dropMe = setInterval(() => {
            createBall();
            setIntervalCount(intervalCount += 1);

            if (intervalCount >= 30) {
                clearInterval(dropMe)
            }

        }, 1000);

        return () => {
            clearInterval(dropMe)
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
                            texture: Logo,
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
                            texture: Logo,
                            xScale: 0.05,
                            yScale: 0.05

                        }
                    }
                })
            World.add(engine.current.world, [ball])
        }
    }

    return (
        <div className='container-matter' >
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
                <form className='resetBtn'><button onClick={updateDimensions} >Reset</button></form>
            </>

        </div>
    )
}

export default Matter