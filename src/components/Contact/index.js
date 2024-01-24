import React from 'react'

import emailjs from '@emailjs/browser';

import { useState, useRef } from 'react'
import './styles.scss'

// component imports
import SectionTitle from '../SectionTitle';

export default function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();


    const contactSubmitHandler = (e) => {
        e.preventDefault()
        console.log("submit clicked")

        emailjs.sendForm('contact_service_fwzcr53', 'contact_service_fwzcr53', form.current, 'r-4MZ2Qvw5nxxX5nN')
            .then((res) => {
                console.log(res.text)
            }, (error) => {
                console.log(error.text)
            });
    }

    return (

        <div className='container-contact' id='form-contact'>
            <SectionTitle sectionTitle="Contact" />

            <form ref={form} className="form-contact" onSubmit={contactSubmitHandler}>
                <div>
                    <label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder='name'
                            name='user_name'
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
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='email'
                        name="user_email"

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
                        name='message'

                    />
                </label>

                <button className='contact-btn'>Send</button>
            </form>
        </div>
    )
}
