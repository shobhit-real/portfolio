import React, { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import ScrollReveal from "scrollreveal";

const Contact = () => {
    const formRef = useRef()
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_fcbnua5', 'template_zwoo3eq', formRef.current, '760Vw0M3GZXBf0Ncj')
            .then(() => {
                setMessage('Message sent successfully.')
                setTimeout(() => {
                    setMessage('')
                }, 5000)
                formRef.current.reset()
            })
            .catch(() => {
                setMessage('Message not sent (service error)')
            })
    }

    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 1500,
            delay: 400,
        });

        sr.reveal(".mail_box", { origin: "right" });
        sr.reveal(".contact_i", { origin: "left" })
        sr.reveal(".location", { origin: "bottom" })
    }, [])

    return (
        <>
            <div className='pt-16 pb-0 lg:py-12 min-h-screen'>
                <div className='grid gap-6 relative grid-rows-[270px_max-content_max-content] gap-y-0 sm:grid-cols-[500px] sm:justify-center lg:grid-cols-[440px_670px] lg:grid-rows-[initial] lg:pb-8'>
                    <div className='relative w-[300px] h-[300px] max-[340px]:w-full sm:w-[350px] lg:w-[392px] lg:h-[375px] sm:py-16 sm:px-6 sm:mx-auto lg:pt-[4.5rem] lg:px-[3.5rem] lg:pb-[3.5rem] lg:mt-[7.5rem] lg:ml-32 bg-[var(--container-color)] pt-12 px-6 pb-14 ml-auto border-b-4 lg:border-b-[6px] border-[var(--first-color)] z-[5] transition-[background-color] duration-[400ms]'>
                        <h2 className='contact_i relative text-3xl lg:text-5xl w-max mt-3 mx-auto mb-6 heading xyz -translate-x-12 max-[340px]:translate-x-0 lg:mb-8 lg:-translate-x-[6.5rem]'>
                            <span>Contact Me.</span>
                        </h2>
                        <p className='contact_i text-black font-medium'>Feel free to send me a message anytime — I’ll get back to you as soon as possible.</p>
                        <div className='geometric-box top-8 right-10'></div>
                    </div>

                    <div className='relative bg-black pt-20 p-6 pb-10 transition-[background-color] duration-[400ms] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:pt-28 lg:pr-[5.5rem] lg:pb-24 lg:pl-[7.5rem] lg:mt-0'>
                        <h2 className='mail_box text-white text-xl lg:text-start mb-8 text-center'>
                            <span>Send Me A Message</span>
                        </h2>

                        <form ref={formRef} onSubmit={sendEmail} className='mail_box relative grid gap-y-5' id='contact-form'>
                            <div className='grid gap-y-5 sm:grid-cols-2 sm:gap-x-4'>
                                <div className='relative w-full h-14'>
                                    <input className='peer text-base outline-none absolute w-full h-full bg-black border-[3px] border-[var(--black-color-light)] text-white py-2 px-4 font-[var(--font-medium)] transition-[border,background-color] duration-400 placeholder:text-[var(--text-color-light)] placeholder:transition-opacity placeholder:duration-400 focus:border-[var(--text-color-light)] focus:placeholder:opacity-0' type="text" name='user_name' id='name' required placeholder='Name' />
                                    <label className='absolute left-3 bg-black px-2 text-[0.815rem] text-[var(--text-color-light)] font-medium pointer-events-none transition-all duration-400 top-1/2 -translate-y-1/2 opacity-0 peer-focus:top-[-10px] peer-focus:opacity-100 peer-focus:translate-y-0 peer-not-placeholder-shown:top-[-16px] peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:translate-y-0' htmlFor="email">Name</label>
                                </div>
                                <div className='relative w-full h-14'>
                                    <input className='peer text-base outline-none absolute w-full h-full bg-black border-[3px] border-[var(--black-color-light)] text-white py-2 px-4 font-[var(--font-medium)] transition-[border,background-color] duration-400 placeholder:text-[var(--text-color-light)] placeholder:transition-opacity placeholder:duration-400 focus:border-[var(--text-color-light)] focus:placeholder:opacity-0' type="email" name='user_email' id='email' required placeholder='Email Address' />
                                    <label className='absolute left-3 bg-black px-2 text-[0.815rem] text-[var(--text-color-light)] font-medium pointer-events-none transition-all duration-400 top-1/2 -translate-y-1/2 opacity-0 peer-focus:top-[-10px] peer-focus:opacity-100 peer-focus:translate-y-0 peer-not-placeholder-shown:top-[-16px] peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:translate-y-0' htmlFor="email">Email Address</label>
                                </div>
                            </div>
                            <div className='relative w-full h-14'>
                                <input className='peer text-base outline-none absolute w-full h-full bg-black border-[3px] border-[var(--black-color-light)] text-white py-2 px-4 font-[var(--font-medium)] transition-[border,background-color] duration-400 placeholder:text-[var(--text-color-light)] placeholder:transition-opacity placeholder:duration-400 focus:border-[var(--text-color-light)] focus:placeholder:opacity-0' type="text" name='user_subject' id='subject' required placeholder='Subject' />
                                <label className='absolute left-3 bg-black px-2 text-[0.815rem] text-[var(--text-color-light)] font-medium pointer-events-none transition-all duration-400 top-1/2 -translate-y-1/2 opacity-0 peer-focus:top-[-10px] peer-focus:opacity-100 peer-focus:translate-y-0 peer-not-placeholder-shown:top-[-16px] peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:translate-y-0' htmlFor="subject">Subject</label>
                            </div>
                            <div className='relative w-full h-40 lg:h-44'>
                                <textarea className='resize-none pt-4 text-base outline-none absolute w-full h-full bg-black border-[3px] border-[var(--black-color-light)] text-white py-2 px-4 font-[var(--font-medium)] transition-[border,background-color] duration-400 placeholder:text-[var(--text-color-light)] placeholder:transition-opacity placeholder:duration-400 focus:border-[3px] focus:border-[var(--text-color-light)] peer duration-400 placeholder:duration-400 focus:placeholder:opacity-0' name="user_message" id="message" required placeholder='Message'></textarea>
                                <label className='absolute left-3 bg-black px-2 text-[0.815rem] text-[var(--text-color-light)] font-medium pointer-events-none transition-all duration-400 top-1/2 -translate-y-1/2 opacity-0 peer-focus:top-[-10px] peer-focus:opacity-100 peer-focus:translate-y-0 peer-not-placeholder-shown:top-[-16px] peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:translate-y-0' htmlFor="message">Message</label>
                            </div>

                            <button className='text-base outline-none border-none bg-[var(--first-color)] p-3 text-white cursor-pointer lg:mb-5 lg:w-max lg:px-4' type='submit'>
                                <i className="ri-send-plane-line"></i> Send Message
                            </button>
                        </form>
                        <span className='text-white text-sm absolute bottom-3 italic lg:pb-16'>{message}</span>
                    </div>

                    <div className='grid gap-y-4 bg-stone-900 pt-4 pb-8 text-center sm:bg-transparent lg:ml-32'>
                        <img className='contact_i w-8 my-0 mx-auto sm:invert lg:w-10' src="/assets/curved-arrow.svg" alt="" />

                        <div className='contact_i flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center lg:gap-2'>
                            <div className='text-white text-sm font-semibold sm:text-black'>
                                <p>Let's connect on LinkedIn</p>
                            </div>
                            <div className='flex justify-center gap-x-3'>
                                <a className='bg-[var(--text-color)] w-8 h-8 lg:w-10 lg:h-10 hover:bg-[var(--first-color)] p-1 lg:p-[0.4rem] grid place-items-center transition-[background-color] duration-300' href='https://www.linkedin.com/in/shobhitbararia' target='_blank'>
                                    <img className='' src="/assets/linkedin.png" alt="" title='LinkedIn' />
                                </a>
                            </div>
                        </div>
                        <div className='location lg:absolute lg:bottom-64 lg:ml-12 z-[5] text-white sm:text-black text-center mt-4 sm:mt-0 sm:text-base font-medium'>
                            <i class="ri-map-pin-2-line text-[var(--first-color)] text-base lg:text-lg"></i> New Delhi, India
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact