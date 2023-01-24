import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Starlink = () => {
  return (
    <motion.section
      className={`fixed top-0 h-full w-full bg-white overflow-hidden scrollbar-none dark:bg-dark-mode`}
      initial={{ y: 999, transition: { type: "linear" } }}
      animate={{ y: 0, transition: { type: "linear" } }}
      exit={{ y: 999, transition: { type: "linear" } }}>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <img src="/assets/starlink.jpg" alt="falcon" className="h-screen  object-cover" />
        </div>
        <div className="basis-1/2 flex flex-col justify-center gap-16 pl-32 dark:text-white">
          <h2 className="text-6xl font-black">STARLINK</h2>
          <p className="text-lg font-regular ">
            A satellite internet service provided by SpaceX, it uses a network of thousands of satellites in low Earth
            orbit to provide high-speed internet access to remote and underserved areas. It's still in beta testing
            phase.
          </p>
          <button className="border-4 border-black  bg-black text-white dark:text-black dark:bg-white dark:border-white  font-bold w-1/2 px-8 py-3">
            WATCH A DEMO
          </button>
        </div>
      </div>
      <Link className="fixed bottom-0  right-0 m-8 font-black text-lg dark:text-white" to="/">
        BACK
      </Link>
    </motion.section>
  );
};

export default Starlink;
