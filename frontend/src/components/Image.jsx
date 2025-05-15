import React from 'react'
import img from "../assets/home-img.png"

const Image = () => {
  return (
    <section className="h-screen w-full">
    <img
      src={img}
      alt="hero"
      className="w-full h-full object-cover object-center"
    />
  </section>
  )
}

export default Image
