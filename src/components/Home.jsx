import React, { useEffect } from 'react'
import ScrollReveal from "scrollreveal";

const Home = () => {
    useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1500,
      delay: 400,
    });

    sr.reveal(".home_div", { origin: "right" });
    sr.reveal(".home_title, .home_info", { origin: "left" })
  }, [])
  return (
    <>
        <div className='mx-6 grid gap-6 pt-24 max-[340px]:mx-4 sm:grid-cols-[350px] sm:justify-center lg:grid-cols-[repeat(2,460px)] lg:gap-y-8 lg:gap-x-4 xl:gap-x-16 lg:items-center lg:py-24 min-h-screen z-[10]'>
            <h1 className='home_title text-5xl text-center lg:text-7xl lg:text-left lg:self-end'>Shobhit</h1>

            <div className='home_div relative justify-self-center lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3'>
                <div className='w-56 max-[340px]:w-44 lg:w-[350px]'>
                    <img className='relative z-10' src="/assets/photo.jpeg" alt="" />
                    <div className='w-[100%] h-[100%] bg-[var(--container-color)] absolute -bottom-3 -right-3 border-4 border-black transition-[background-color] duration-[400ms] lg:-right-5 lg:-bottom-5 lg:border-[6px] z-[5]'></div>

                    <img className='absolute invert w-[50px] transition-[filter] duration-[400ms] left-[40%] -bottom-16 lg:top-16 lg:-left-32 lg:rotate-[80deg] lg:w-20' src="/assets/curved-arrow.svg" alt="" />
                    <img className='absolute invert w-[50px] transition-[filter] duration-[400ms] -right-8 -bottom-2 lg:-left-60 lg:bottom-16 lg:w-20 lg:rotate-[30deg]' src="/assets/random-lines.svg" alt="" />

                    <div className='geometric-box top-10 -left-2 z-10 lg:top-60'>

                    </div>
                </div>
                <div className='h-max absolute -left-12 top-0 bottom-0 my-auto mx-0 grid gap-y-4 lg:left-[24.5rem]'>
                    <a className='bg-[var(--black-color-light)] hover:bg-black w-6 h-6 lg:w-9 lg:h-9 lg:p-[0.4rem] p-[0.3rem] grid place-items-center transition-[background-color] duration-300 hover:scale-[1.02] ease-in-out' href='https://leetcode.com/u/shobhit-real' target='_blank'>
                        <img className='' src="/assets/leetcode.png" alt="" title='LeetCode' />
                    </a>
                    <a className='bg-[var(--black-color-light)] hover:bg-black w-6 h-6 lg:w-9 lg:h-9 lg:p-[0.4rem] p-1 grid place-items-center transition-[background-color] duration-300 hover:scale-[1.02] ease-in-out' href='https://www.linkedin.com/in/shobhitbararia' target='_blank'>
                        <img className='' src="/assets/linkedin.png" alt="" title='LinkedIn' />
                    </a>
                    <a className='bg-[var(--black-color-light)] hover:bg-black w-6 h-6 lg:w-9 lg:h-9 lg:p-[0.4rem] p-1 grid place-items-center transition-[background-color] duration-300 hover:scale-[1.02] ease-in-out' href='https://github.com/shobhit-real' target='_blank'>
                        <img className='' src="/assets/github.png" alt="" title='GitHub' />
                    </a>
                    <a className='bg-[var(--black-color-light)] hover:bg-black w-6 h-6 lg:w-9 lg:h-9 lg:p-[0.4rem] p-1 grid place-items-center transition-[background-color] duration-300 hover:scale-[1.02] ease-in-out' href='https://public.tableau.com/app/profile/shobhit.real' target='_blank'>
                        <img className='invert' src="/assets/tableau.svg" alt="" title='Tableau' />
                    </a>
                </div>
            </div>
            <div className='home_info mt-16 lg:mt-0 lg:self-start'>
                <p className="text-center text-base text-black mb-6 lg:text-left lg:relative lg:text-xl lg:mb-20 lg:pl-12 lg:after:content-[''] lg:after:w-8 lg:after:h-[2px] lg:after:bg-black lg:after:absolute lg:after:left-0 lg:after:top-[14px]">
                   Aspiring <b>full-stack developer</b> & <b>data analyst</b> skilled in Python, 
                   MERN stack, and data tools, focused on extracting insights and solving real-world problems.
                </p>

                <a href='/#about' className='block w-max my-6 mx-auto lg:m-0 lg:flex lg:items-center lg:gap-x-3'>
                    <div className='bg-black text-white w-9 h-9 lg:w-11 lg:h-11 grid place-items-center text-base lg:text-xl cursor-pointer overflow-hidden transition-[background-color] duration-[400ms]'>
                        <i className="ri-arrow-down-s-line infinite-scroll"></i>
                    </div>
                    <span className='hidden lg:block text-[var(--text-color)] text-sm font-medium'>Scroll Down</span>
                </a>
            </div>
        </div>
    </>
  )
}

export default Home