import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [showMenu, setMenu] = useState(false)
    const [shadow, setShadow] = useState(false)

    const { hash, pathname } = useLocation();

    const isActive = (section) => {
        if (pathname !== "/") return false;
        return hash === `#${section}` || (!hash && section === "home")
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <header className={`fixed w-full top-0 left-0 bg-[var(--body-color)] z-[100] transition-shadow duration-[400ms] ${shadow ? 'shadow-[0_1px_16px_hsla(0,0%,0%,0.12)]' : ''}`}>
                <nav className='relative mx-6 h-[var(--header-height)] lg:h-[calc(var(--header-height)+2rem)] lg:mx-10 flex justify-between items-center max-[340px]:mx-4'>
                    <a className='flex gap-2 items-center font-semibold text-black' href='/'>
                        <img className='w-8 h-8 rounded-full' src='/assets/logo.jpg' />
                        <span className=''>Shobhit B.</span>
                    </a>
                    <div className={`${showMenu ? 'block' : 'max-lg:hidden'} max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-black/75 max-lg:w-full max-lg:text-center max-lg:transition-[top] max-lg:duration-[400ms] max-sm:pt-7 max-lg:pb-16 backdrop-blur-[7px] lg:ml-auto`}>
                        <span className='block text-white text-base font-semibold mt-6 max-sm:mt-2 mb-14 lg:hidden'>Menu</span>
                        <ul className='flex flex-col gap-10 lg:flex-row lg:gap-x-16'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={() =>
                                        `relative font-semibold text-[17px] lg:text-[var(--text-color)] lg:hover:text-black transition-colors duration-300 ${isActive("home") ? 'lg:text-black text-white after:w-2/5' : 'text-[var(--text-color-light)] after:w-0'} after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-white lg:after:bg-black after:transition-all after:duration-300 cursor-pointer`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/#about"
                                    className={() =>
                                        `relative font-semibold text-[17px] lg:text-[var(--text-color)] lg:hover:text-black transition-colors duration-300 ${isActive("about") ? 'lg:text-black text-white after:w-2/5' : 'text-[var(--text-color-light)] after:w-0'} after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-white lg:after:bg-black after:transition-all after:duration-300 cursor-pointer`
                                    }
                                >
                                    About Me
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/#projects"
                                    className={() =>
                                        `relative font-semibold text-[17px] lg:text-[var(--text-color)] lg:hover:text-black transition-colors duration-300 ${isActive("projects") ? 'lg:text-black text-white after:w-2/5' : 'text-[var(--text-color-light)] after:w-0'} after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-white lg:after:bg-black after:transition-all after:duration-300 cursor-pointer`
                                    }
                                >
                                    Portfolio
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/#contact"
                                    className={() =>
                                        `relative font-semibold text-[17px] lg:text-[var(--text-color)] transition-colors duration-300 ${isActive("contact") ? 'lg:after:hidden text-white after:w-1/4' : 'text-[var(--text-color-light)] after:w-0'} after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-white after:transition-all after:duration-300 cursor-pointer lg:bg-black lg:hover:bg-[var(--black-color-light)] lg:text-white lg:py-4 lg:px-6`
                                    }
                                >
                                    Contact Me
                                </NavLink>
                            </li>
                        </ul>

                        <div className='text-white absolute text-2xl top-4 right-6 cursor-pointer lg:hidden' onClick={() => setMenu(false)}>
                            <i className="ri-close-line"></i>
                        </div>
                    </div>

                    <div>
                        <div className='w-8 h-8 bg-black text-white grid gap-6 place-items-center cursor-pointer lg:hidden' onClick={() => setMenu(true)}>
                            <i className='ri-menu-4-line text-xl'></i>
                        </div>
                    </div>


                </nav>
            </header>

        </>
    )
}

export default Navbar