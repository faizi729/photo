import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// External Images
const img1 = "https://res.cloudinary.com/daeyt0uqy/image/upload/v1747287851/DSC_0033-Recovered_gbiqae.jpg"
const img3 = "https://res.cloudinary.com/daeyt0uqy/image/upload/v1747287851/DSC_4373.jpg_001_h1rmdn.jpg"
import img6 from "../assets/bride-groom.JPG"

// Local Images
import img2 from "../assets/bride-img1.JPG"
import img4 from "../assets/baby-img.JPG"
import img5 from "../assets/bride-img2.JPG"

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="py-12 px-4">
            <h1
                className="text-center font-bold text-[28px] md:text-[35px] mb-10"
                data-aos="fade-up"
            >
                Our Featured Work
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto">
                <img src={img1} alt="img1" data-aos="zoom-in" className="w-full h-auto rounded-lg object-cover" />
                <img src={img3} alt="img3" data-aos="zoom-in" className="w-full h-auto rounded-lg object-cover" />
                <img src={img4} alt="img4" data-aos="zoom-in" className="w-full h-auto rounded-lg object-cover" />
                <img src={img5} alt="img5" data-aos="zoom-in" className="w-full h-auto rounded-lg object-cover" />
                <img src={img6} alt="img6" data-aos="zoom-in" className="w-full h-auto rounded-lg object-cover" />
                <img src={img2} alt="img2" data-aos="zoom-in" className="w-full h-auto rounded-lg object-cover" />
            </div>
        </div>
    );
};

export default Hero;
