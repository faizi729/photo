import React from 'react'

const img = "https://res.cloudinary.com/dqwgwxflp/image/upload/v1747906485/home-img_zbas9n.png"

const Image = () => {
  return (
    <section className="h-screen w-full">
      <img
        src={img}
        alt="hero"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
}

export default Image;
