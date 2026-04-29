import React from 'react'

const projects = [

]

const Aiml = () => {
    return (
        <>
            <div className='pt-16 pb-8 bg-[var(--container-color)] transition-[background-color] duration-[400ms] lg:pt-32 min-h-screen'>
                <h2 className='relative text-3xl lg:text-5xl w-max mt-3 mx-auto mb-8 flex gap-4 items-center justify-center'>
                    <div className='relative inline-block'>
                        <div className='absolute w-6 h-6 lg:w-8 lg:h-8 bg-[var(--first-color)] -right-0.5'></div>
                        <img className='w-8 h-8 lg:w-12 lg:h-12 relative' src="/assets/ai.svg" alt="" />
                    </div>
                    <span>AI & ML</span>
                </h2>

                <div className='mx-6 grid gap-6 gap-y-8 sm:grid-cols-[350px] sm:justify-center md:grid-cols-[repeat(2,350px)] xl:grid-cols-[repeat(3,352px)] lg:pt-12 lg:pb-4'>
                    {projects.length === 0 ? <p className='block text-center ml-3'>No projects to showcase at the moment.</p>
                        : projects.map((project, index) => {
                            return (
                                <article className='pt-4 px-4 pb-8 lg:pt-5 lg:px-5 lg:pb-10 transition-colors duration-400 hover:bg-white' key={index}>
                                    <div className='relative mb-3 lg:mb-4'>
                                        <img src={project.image} alt="" />
                                    </div>
                                    <div className='mb-5 lg:mb-8'>
                                        <div className="relative inline-block text-base font-medium text-[var(--black-color-light)] mb-3 pl-7 after:content-[''] after:w-5 after:h-[1px] after:bg-[var(--text-color)] after:absolute after:top-1/2 after:left-0">
                                            {
                                                project.skills.map((skill, index) => (
                                                    <i key={index} className={`${skill.logo} mr-0.5`} title={skill.name}></i>
                                                ))
                                            }
                                        </div>
                                        <h3 className='text-lg mb-3'>{project.title}</h3>
                                        <p>
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className='flex items-center gap-x-4'>
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

export default Aiml