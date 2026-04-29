import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from "scrollreveal";

const Projects = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 1500,
            delay: 400,
        });

        sr.reveal(".domain_card", { interval: 100 });
    }, [])
    return (
        <>
            <div className='pt-16 pb-8 lg:py-24 min-h-screen'>
                <h2 className='relative text-3xl lg:text-5xl w-max mt-3 mx-auto mb-8 heading xyz'>
                    <span>Portfolio.</span>
                </h2>

                <div className='mx-6 gap-x-12 grid grid-cols-[250px] justify-center gap-y-8 pt-4 max-[340px]:mx-4 sm:grid-cols-[350px] sm:justify-center md:grid-cols-[repeat(2,250px)] lg:grid-cols-[repeat(3,282px)] lg:gap-x-12 xl:gap-x-20 lg:pt-12 lg:pb-20'>
                    <Link to="/dev-portfolio" className="block" title='Web Development - Portfolio'>
                        <article className='domain_card relative group cursor-pointer'>
                            <div className='absolute w-full h-full group-hover:border-4 group-hover:border-[var(--first-color)] transition-transform duration-[400ms] translate-x-0 translate-y-0 group-hover:translate-x-3 group-hover:translate-y-3 lg:group-hover:translate-x-5 lg:group-hover:translate-y-5'></div>

                            <div className='h-[100%] bg-[var(--body-color)] border-4 border-black py-24 px-4 pb-12 relative z-[5] transition-colors duration-[400ms] lg:pt-24 lg:px-6 lg:pb-14 lg:border-[6px]'>
                                <div className='relative inline-block'>
                                    <div className='absolute w-6 h-6 lg:w-8 lg:h-8 bg-[var(--first-color)] -right-0.5'></div>
                                    <i className="ri-code-box-line text-[2rem] lg:text-5xl text-black relative"></i>
                                </div>
                                <h2 className='text-xl lg:text-2xl mb-5 lg:mb-6'>Web Development</h2>
                                <p>
                                    Building responsive and user-friendly websites with modern technologies, focusing on performance and clean design.
                                </p>
                            </div>
                        </article>
                    </Link>

                    <Link to="/dva-portfolio" className="block" title='Data Analytics - Portfolio'>
                        <article className='domain_card relative group cursor-pointer'>
                            <div className='absolute w-full h-full group-hover:border-4 group-hover:border-[var(--first-color)] transition-transform duration-[400ms] translate-x-0 translate-y-0 group-hover:translate-x-3 group-hover:translate-y-3 lg:group-hover:translate-x-5 lg:group-hover:translate-y-5'></div>

                            <div className='h-[100%] bg-[var(--body-color)] border-4 border-black py-24 px-4 pb-12 relative z-[5] transition-colors duration-[400ms] lg:pt-24 lg:px-6 lg:pb-14 lg:border-[6px]'>
                                <div className='relative inline-block'>
                                    <div className='absolute w-6 h-6 lg:w-8 lg:h-8 bg-[var(--first-color)] -right-0.5'></div>
                                    <i className="ri-bar-chart-2-line text-[2rem] lg:text-5xl text-black relative"></i>
                                </div>
                                <h2 className='text-xl lg:text-2xl mb-5 lg:mb-6'>Data Analytics</h2>
                                <p>
                                    Analyzing data to find useful insights and create simple, clear visualizations for better decisions.
                                </p>
                            </div>
                        </article>
                    </Link>

                    <Link to="/aiml-portfolio" className="block" title='AI & ML - Portfolio'>
                        <article className='domain_card relative group cursor-pointer'>
                            <div className='absolute w-full h-full group-hover:border-4 group-hover:border-[var(--first-color)] transition-transform duration-[400ms] translate-x-0 translate-y-0 group-hover:translate-x-3 group-hover:translate-y-3 lg:group-hover:translate-x-5 lg:group-hover:translate-y-5'></div>

                            <div className='h-[100%] bg-[var(--body-color)] border-4 border-black py-24 px-4 pb-12 relative z-[5] transition-colors duration-[400ms] lg:pt-24 lg:px-6 lg:pb-14 lg:border-[6px]'>
                                <div className='relative inline-block'>
                                    <div className='absolute w-6 h-6 lg:w-8 lg:h-8 bg-[var(--first-color)] -right-0.5'></div>
                                    <img className='w-8 h-8 lg:w-12 lg:h-12 inline-block relative' src="/assets/ai.svg" alt="" />
                                </div>
                                <h2 className='text-xl lg:text-2xl mb-5 lg:mb-6'>AI & ML</h2>
                                <p>
                                    Creating smart solutions using machine learning to automate tasks and solve real-world problems.
                                </p>
                            </div>
                        </article>
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Projects