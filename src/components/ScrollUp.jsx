import React, { useEffect, useState } from 'react'

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY >= 350)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <a className={`fixed w-9 h-9 lg:w-11 lg:h-11 right-8 bottom-10 bg-black inline-flex p-2 text-base lg:text-xl justify-center items-center text-white  transition-all duration-400 z-10 hover:-translate-y-2 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`} href='/#home'>
                <i className='ri-arrow-up-s-line'></i>
            </a>
        </>
    )
}

export default ScrollUp