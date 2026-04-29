import React, { useEffect } from 'react'
import ScrollReveal from "scrollreveal";

const projects = [
    {
        title: 'BarariaWare',
        desc: 'A full-stack, catalogue-driven B2B platform that simplifies product discovery and streamlines bulk order enquiries for the hotelware industry.',
        image: '/projects/barariaware.png',
        skills: [
            {
                name: 'React', logo: 'ri-reactjs-fill'
            },
            {
                name: 'Tailwind CSS', logo: '/assets/tailwind.svg'
            },
            {
                name: 'NextJS', logo: '/assets/next.svg'
            },
            {
                name: 'Node.js', logo: '/assets/node.svg'
            },
            {
                name: 'MongoDB', logo: '/assets/mongo.svg'
            },

        ],
        github: 'https://github.com/shobhit-real/barariaware',
        hosted: 'https://barariaware.com'
    },
    {
        title: 'Spotify Clone',
        desc: 'A responsive web music player inspired by Spotify, featuring a clean dark UI, smooth controls, and seamless performance across all screen sizes.',
        image: '/projects/spotify.png',
        skills: [
            {
                name: 'HTML', logo: 'ri-html5-fill'
            },
            {
                name: 'CSS', logo: 'ri-css3-fill'
            },
            {
                name: 'JavaScript', logo: 'ri-javascript-fill'
            },
        ],
        github: 'https://github.com/shobhit-real/Spotify-Clone',
        hosted: 'https://spotify-clone-shobhit.netlify.app'
    },
    {
        title: 'Portfolio',
        desc: 'A responsive, web-based 3D animated portfolio built with React, Three.js, & Motion. This project showcases interactive 3D visuals, smooth animations, and a sleek, modern UI. Fully responsive, it adapts seamlessly to all screen sizes, offering an immersive and engaging user experience to highlight my skills and projects.',
        image: '/projects/portfolio.png',
        skills: [
            {
                name: 'JavaScript', logo: 'ri-javascript-fill'
            },
            {
                name: 'React', logo: 'ri-reactjs-fill'
            }
        ]
    },
]

const Dev = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 1500,
            delay: 400,
        });

        sr.reveal(".projects_card", { interval: 100 })
    }, [])
    return (
        <>
            <div className='pt-16 pb-8 bg-[var(--container-color)] transition-[background-color] duration-[400ms] lg:pt-32 min-h-screen'>
                <h2 className='relative text-3xl lg:text-5xl w-max mt-3 mx-auto mb-8 flex gap-4 items-center justify-center'>
                    <div className='relative inline-block'>
                        <div className='absolute w-6 h-6 lg:w-8 lg:h-8 bg-[var(--first-color)] -right-0.5'></div>
                        <i className="ri-code-box-line lead text-[2rem] lg:text-5xl font-light text-black relative"></i>
                    </div>
                    <span>Web Development</span>
                </h2>

                <div className='mx-6 grid gap-6 gap-y-8 sm:grid-cols-[350px] sm:justify-center md:grid-cols-[repeat(2,350px)] xl:grid-cols-[repeat(3,352px)] lg:pt-12 lg:pb-4'>
                    {projects.map((project, index) => {
                        return (
                            <article className='projects_card pt-4 px-4 pb-8 lg:pt-5 lg:px-5 lg:pb-10 transition-colors duration-400 hover:bg-[#f5f5f5]' key={index}>
                                <div className='relative mb-3 lg:mb-4 border-2 border-stone-500'>
                                    <img src={project.image} alt="" />
                                </div>
                                <div className='mb-5 lg:mb-8'>
                                    <div className="relative inline-block text-base font-medium text-[var(--black-color-light)] mb-3 pl-7 after:content-[''] after:w-5 after:h-[1px] after:bg-[var(--text-color)] after:absolute after:top-1/2 after:left-0">
                                        <div className='flex items-center justify-center gap-1'>
                                        {
                                            project.skills.map((skill, index) => (
                                                skill.logo[0] === '/' 
                                                ? <img className='w-4 h-4' src={skill.logo} alt={skill.name} title={skill.name} />
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
                                    <a className='flex items-center gap-x-1 font-medium text-[var(--text-color)] transition-colors duration-[400ms] group hover:text-[var(--first-color)] cursor-pointer' href={project.github} target='_blank'>
                                        <i className="ri-github-line text-base text-black transition-colors duration-[400ms] group-hover:text-[var(--first-color)]"></i> View
                                    </a>
                                    <a className='flex items-center gap-x-1 font-medium text-[var(--text-color)] transition-colors duration-[400ms] group hover:text-[var(--first-color)] cursor-pointer' href={project.hosted} target='_blank'>
                                        <i className="ri-global-line text-base text-black transition-colors duration-[400ms] group-hover:text-[var(--first-color)]"></i> View
                                    </a>
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