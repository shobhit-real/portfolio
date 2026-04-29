import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='bg-black'>
            <div className='mx-6 grid gap-6 pt-12 pb-8 gap-y-10 max-[340px]:mx-4'>
                <div className='flex justify-between px-8 lg:text-base'>
                <ul className='flex flex-col lg:flex-row justify-center gap-x-8 gap-y-1'>
                    <li className='text-white hover:text-[var(--text-color-light)] transition-colors duration-[400ms]'>
                        <a href="">About</a>
                    </li>
                    <li className='text-white hover:text-[var(--text-color-light)] transition-colors duration-[400ms]'>
                        <a href="/dev-portfolio">Web Development</a>
                    </li>
                    <li className='text-white hover:text-[var(--text-color-light)] transition-colors duration-[400ms]'>
                        <a href="/dva-portfolio">Data Analytics</a>
                    </li>
                    <li className='text-white hover:text-[var(--text-color-light)] transition-colors duration-[400ms]'>
                        <a href="/aiml-portfolio">AI & ML</a>
                    </li>
                </ul>
                <ul className='flex flex-col justify-end lg:flex-row lg:justify-center gap-x-8 gap-y-1'>
                    <li className='text-white hover:text-[var(--text-color-light)] transition-colors duration-[400ms]'>
                        <a href="https://www.linkedin.com/in/shobhitbararia" target='_blank'>LinkedIn</a>
                    </li>
                    <li className='text-white hover:text-[var(--text-color-light)] transition-colors duration-[400ms]'>
                        <a href="https://github.com/shobhit-real" target='_blank'>GitHub</a>
                    </li>
                    <li className='text-white hover:text-[var(--text-color-light)] transition-colors duration-[400ms]'>
                        <a href="https://public.tableau.com/app/profile/shobhit.real" target='_blank'>Tableau</a>
                    </li>
                </ul>
                </div>

                <span className='text-[var(--text-color-light)] text-center font-medium text-sm'>
                    &#169; All Rights Reserved By
                    <a className='hover:text-white' href='https://www.linkedin.com/in/shobhitbararia'> Shobhit B.</a>
                </span>
            </div>
        </footer>
    </>
  )
}

export default Footer