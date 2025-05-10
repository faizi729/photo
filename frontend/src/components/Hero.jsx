import React, { useEffect } from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img6.png"
import img4 from "../assets/img5.png"
import img5 from "../assets/img4.png"
import img6 from "../assets/img3.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        })
    }, [])

    return (
        <>
            <div className='flex justify-center'>
                <h1 className='font-bold text-[28px] md:text-[35px] mb-6 mt-10 text-center' data-aos="fade-up">
                    Our Featured Work
                </h1>
            </div>

            <div className="flex justify-center items-center px-4">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 w-full max-w-[1400px]">
                    <div className="grid grid-cols-1" data-aos="fade-right">
                        <img src={img1} alt="" className='w-full object-cover' />
                    </div>
                    <div className="grid grid-rows-2 gap-4" data-aos="fade-left">
                        <img src={img3} alt="" className='w-full object-cover' />
                        <img src={img4} alt="" className='w-full object-cover' />
                    </div>
                    <div className="grid grid-cols-1" data-aos="zoom-in">
                        <img src={img5} alt="" className='w-full object-cover max-md:-mt-32' />
                    </div>
                    <div className="grid grid-rows-2 gap-4" data-aos="fade-up">
                        <img src={img6} alt="" className='w-full object-cover ' />
                        <img src={img2} alt="" className='w-full object-cover lg:-mt-12'  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
