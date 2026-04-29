import React, { useEffect } from 'react'
import ScrollReveal from "scrollreveal";

const About = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 1500,
            delay: 400,
        });

        sr.reveal(".about_image", { origin: "right" });
        sr.reveal(".about_div, .about_info", { origin: "left" });
    }, [])
    return (
        <>
            <div className='pt-16 pb-8 bg-[var(--container-color)] transition-[background-color] duration-[400ms] lg:py-24 min-h-screen'>
                <div className='about_div mx-6 grid gap-6 gap-y-0 max-[340px]:mx-4 sm:grid-cols-[350px] sm:justify-center lg:mx-auto lg:grid-cols-[440px_525px] lg:gap-y-4 lg:gap-x-12 xl:gap-x-36 lg:items-center lg:py-4'>
                    <h2 className='relative text-3xl lg:text-5xl w-max mt-3 mx-auto mb-8 heading lg:self-end xl:mx-0'>
                        <span>About Me.</span>
                    </h2>

                    <div className='relative justify-self-center mt-10 mb-20 lg:-order-1 lg:row-start-1 lg:row-end-3'>
                        <div className='about_image w-56 max-[340px]:w-44 lg:w-[350px]'>
                            <img className='relative border-4 border-white z-[1] lg:border-8' src="/assets/photo.jpeg" alt="" />

                            <div className='absolute w-[150px] h-[385px] max-[340px]:h-[330px] lg:w-60 lg:h-[615px] max-[340px]:-right-10 lg:-right-16 xl:-right-[5.5rem] bg-[var(--body-color)] -top-10 -right-14 lg:-top-16 border-b-4 border-b-[var(--first-color)] lg:border-b-[6px] transition-[background-color] duration-[400ms]'></div>

                            <div className='geometric-box top-6 -right-10 xl:-right-16 lg:top-16'></div>
                            <img className='absolute invert -right-6 top-24 w-14 lg:w-20 lg:-right-8 lg:top-40 transition-[filter] duration-[400ms]' src="/assets/random-lines.svg" alt="" />
                            <div className='absolute w-10 h-10 bg-[var(--first-color)] -right-2 bottom-6 lg:w-16 lg:h-16 lg:-right-3'></div>
                        </div>
                    </div>
                    <div className='about_info p-5 lg:self-start lg:pl-12'>
                        <p className="relative text-black about-desc mb-6 lg:text-xl lg:mb-4">Currently pursuing a B.Tech in Data Science at <span className='font-semibold'>NST, Rishihood University</span> complemented by a micro-credit program in the CS domain from <span className='font-semibold'>Daksh Gurukul, IIT Guwahati</span></p>
                        <div className='mb-6 lg:mb-16'>
                            <ul className='list-[square] text-base font-semibold text-black mb-2'>
                                <li>Skills</li>
                            </ul>
                            <div className='flex gap-2 text-white flex-wrap'>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>HTML</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>CSS / Tailwind CSS</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>JavaScript</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>React</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>NextJS</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Node.js</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Express.js</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Python</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>SQL</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>MongoDB</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Spreadsheets</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Tableau</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Probability & Statistics</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Data Visualization</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>Data Analytics</span>
                                <span className='px-3 py-1 bg-[var(--first-color)] rounded-2xl '>TypeScript</span>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 lg:justify-normal'>
                            <a href='/assets/resume.pdf' onClick={(e) => e.stopPropagation()} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-[var(--black-color-light)] hover:bg-black text-white flex items-center gap-2'><i className="ri-arrow-down-line text-lg"></i>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About