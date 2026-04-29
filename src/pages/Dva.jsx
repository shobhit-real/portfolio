// Excel - ri-file-excel-2-fill

import React, { useEffect, useState } from 'react'
import ScrollReveal from "scrollreveal";

const projects = [
    {
        title: 'Uber Trips - Dashboard',
        desc: 'An interactive dashboard showing Uber trips, revenue, fares, and user activity across cities, helping understand demand trends and payment behavior.',
        image: '/projects/uber.png',
        skills: [
            {
                name: 'Tableau', logo: '/assets/tableau.svg'
            },

        ],
        hosted: 'https://barariaware.com'
    },
    {
        title: 'Diabetic Readmission - Dashboard',
        desc: 'An interactive healthcare dashboard showing diabetic readmission rates, patient risk levels, and clinical factors to identify trends and high-risk cases.',
        image: '/projects/diabetic.png',
        skills: [
            {
                name: 'Tableau', logo: '/assets/tableau.svg'
            },
            {

                name: 'Python', logo: '/assets/python.svg'
            },
        ],
        github: 'https://github.com/omkarshukla84/SectionB_G-15_-DiabeticCare',
        hosted: 'https://public.tableau.com/app/profile/shobhit.real/viz/G-15_DiabeticCare_17773552740700/Dashboard1'
    },
]

const Dev = () => {
    const [active, setActive] = useState('All')
    const filters = ['All', 'Excel', 'Tableau', 'Python']

    const isActive = (skill) => {
        console.log(skill)
        setActive(skill)
    }
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 1500,
            delay: 400,
        });

        sr.reveal(".projects_card", { interval: 100 })
    }, [])

    const filteredProjects = projects.filter((item) => {
        const matchesCategory =
            active === 'All' || item.skills.some((skill) => skill.name === active)


        return matchesCategory
    })

    return (
        <>
            <div className='pt-16 pb-8 bg-[var(--container-color)] transition-[background-color] duration-[400ms] lg:pt-32 min-h-screen'>
                <h2 className='relative text-3xl lg:text-5xl w-max mt-3 mx-auto mb-8 flex gap-4 items-center justify-center'>
                    <div className='relative inline-block'>
                        <div className='absolute w-6 h-6 lg:w-8 lg:h-8 bg-[var(--first-color)] -right-0.5'></div>
                        <i className="ri-bar-chart-2-line text-[2rem] lg:text-5xl font-light text-black relative"></i>
                    </div>
                    <span>Data Analytics</span>
                </h2>


                <div className="mb-4 mx-auto w-[90%] md:w-full max-w-full overflow-x-auto no-scrollbar">
                    <div className="flex w-max mx-auto items-center justify-start gap-3 p-2 rounded-full shadow-[0_1px_16px_hsla(0,0%,0%,0.12)] bg-[var(--body-color)]">
                        {filters.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActive(item)}
                                className={`text-nowrap px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${active === item
                                        ? 'bg-black text-white shadow-md scale-105'
                                        : 'text-white bg-stone-700 hover:bg-black'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='mx-6 grid gap-6 gap-y-8 sm:grid-cols-[350px] sm:justify-center md:grid-cols-[repeat(2,350px)] xl:grid-cols-[repeat(3,352px)] lg:pt-12 lg:pb-4'>
                    {filteredProjects.map((project, index) => {
                        return (
                            <article className='projects_card pt-4 px-4 pb-8 lg:pt-5 lg:px-5 lg:pb-10 transition-colors duration-400 hover:bg-[#f5f5f5]' key={index}>
                                <div className='relative mb-3 lg:mb-4 border-2 border-stone-500'>
                                    <img className='' src={project.image} alt="" />
                                </div>
                                <div className='mb-5 lg:mb-8'>
                                    <div className="relative inline-block text-base font-medium text-[var(--black-color-light)] mb-3 pl-7 after:content-[''] after:w-5 after:h-[1px] after:bg-[var(--text-color)] after:absolute after:top-1/2 after:left-0">
                                        <div className='flex items-center justify-center gap-1'>
                                            {
                                                project.skills.map((skill, index) => (
                                                    skill.logo[0] === '/'
                                                        ? <img key={index} className='w-4 h-4' src={skill.logo} alt={skill.name} title={skill.name} />
                                                        : <i key={index} className={`${skill.logo} text-base leading-none`} title={skill.name}></i>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <h3 className='text-lg mb-3'>{project.title}</h3>
                                    <p>
                                        {project.desc}
                                    </p>
                                </div>

                                <div className='flex items-center bottom-0 justify-end gap-x-4'>
                                    {project.github ? <a className='flex items-center gap-x-1 font-medium text-[var(--text-color)] transition-colors duration-[400ms] group hover:text-[var(--first-color)] cursor-pointer' href={project.github} target='_blank'>
                                        <i className="ri-github-line text-base text-black transition-colors duration-[400ms] group-hover:text-[var(--first-color)]"></i> View
                                    </a> : null}

                                    {project.hosted ? <a className='flex items-center gap-x-1 font-medium text-[var(--text-color)] transition-colors duration-[400ms] group hover:text-[var(--first-color)] cursor-pointer' href={project.hosted} target='_blank'>
                                        <i className="ri-global-line text-base text-black transition-colors duration-[400ms] group-hover:text-[var(--first-color)]"></i> View
                                    </a> : null}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Dev