import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <section className="bg-starship-bg-light h-screen bg-cover  bg-opacity-10 dark:bg-starship-bg-dark dark:text-white ">
      <div className="flex flex-col h-full justify-center items-center gap-8 ">
        <h2 className="font-black text-2xl md:text-5xl">Reach for the stars with us.</h2>
        <p className="font-light text-sm md:text-2xl ">
          It's more than just a catchphrase, it's a promise to provide you with a once in a lifetime experience. <br />
          Our state-of-the-art rockets and highly trained team will ensure a safe and unforgettable journey. <br />
          Join us as we push the boundaries of human exploration and make history together.
        </p>
        <div className="flex gap-8">
          <AnchorLink
            href="#shop"
            className="border-4 border-black  bg-black text-white font-bold px-8 py-3 dark:border-white dark:text-black dark:bg-white">
            PRICING
          </AnchorLink>
          <AnchorLink href="#contact" className="border-4 border-black font-bold px-8 py-3 dark:border-white">
            CONTACT
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
