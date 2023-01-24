import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Falcon = () => {
  return (
    <motion.section
      className={`fixed top-0 h-full w-full bg-white overflow-hidden scrollbar-none dark:bg-dark-mode`}
      initial={{ y: 999, transition: { type: "linear" } }}
      animate={{ y: 0, transition: { type: "linear" } }}
      exit={{ y: 999, transition: { type: "linear" } }}>
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/3">
          <img src="/assets/falcon.jpg" alt="falcon" className="md:h-screen  object-cover object-[20%]" />
        </div>
        <div className="md:basis-1/2 w-full items-center md:items-start flex flex-col justify-center gap-16 md:pl-32 dark:text-white ">
          <h2 className="text-2xl md:text-6xl font-black">FALCON 9</h2>
          <p className="text-lg font-regular ">
            A reusable rocket designed and manufactured by SpaceX for satellite launches and the transport of the Dragon
            spacecraft into orbit. It has a two-stage design and uses nine Merlin engines in the first stage and one in
            the second stage. Its reusable first-stage booster helps to reduce the cost of space launches.
          </p>
          <button className="border-4 border-black  bg-black text-white dark:text-black dark:bg-white dark:border-white font-bold w-1/2 px-8 py-3">
            WATCH A DEMO
          </button>
        </div>
      </div>
      <Link className="fixed bottom-0 right-0 m-8 font-black text-lg dark:text-white" to="/">
        BACK
      </Link>
    </motion.section>
  );
};

export default Falcon;
