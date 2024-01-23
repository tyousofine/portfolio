import React from 'react'

import { useState } from 'react'
import './styles.scss'

// component imports
import SectionTitle from '../SectionTitle';

export default function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const contactSubmitHandler = (e) => {
        e.preventDefault()
        console.log("submit clicked")
    }

    return (

        <div className='container-contact' id='form-contact'>
            <SectionTitle sectionTitle="Contact" />

            <form className="form-contact" onSubmit={contactSubmitHandler}>
                <div>
                    <label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder='name'
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                            placeholder='subject'
                        />
                    </label>
                </div>

                <label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='email'

                    />
                </label>
                <label>

                    <textarea
                        type="text"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        placeholder='message'
                        rows={10}
                        cols={30}

                    />
                </label>

                <button className='contact-btn'>Send</button>
            </form>
        </div>
    )
}
