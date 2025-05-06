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
        < >
        
        <div className='flex justify-center'>
            <h1 className='font-bold text-[35px] mb-10 mt-10' data-aos="fade-up">Our Featured Work</h1>
        </div>
    <div className="flex justify-center items-center">
        <div className="flex flex-row gap-2 h-[800px]">
            <div className="grid grid-cols-1"data-aos="fade-right">
                <img src={img1} alt="" />
            </div>
            <div className="grid grid-rows-2" data-aos="fade-left">
                <img src={img3} alt="" />
                <img src={img4} alt="" className='mt-8'/>
            </div>
            <div className="grid grid-cols-1" data-aos="zoom-in">
                <img src={img5} alt="" />
            </div>
            <div className="grid grid-rows-2" data-aos="fade-up">
                <img src={img6} alt="" />
                <img src={img2} alt="" className='-mt-8' />
            </div>
        </div>
    </div>
        </>
  )
}

export default Hero