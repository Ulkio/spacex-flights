import React from "react";

const Shop = () => {
  return (
    <section id="shop" className="bg-shop-bg-light dark:bg-shop-bg-dark  h-screen bg-cover ">
      <div className="flex flex-col  h-full justify-evenly items-center">
        <h2 className="text-2xl md:text-6xl font-black dark:text-white">Book a flight</h2>
        <div className="flex flex-col md:flex-row justify-evenly md:w-full">
          <div className="bg-white bg-opacity-80 md:h-[500px] md:w-72 gap-2 shadow-2xl p-8 flex flex-col">
            <p className="text-lg md:text-3xl font-black">PASSENGER</p>
            <p className="font-light md:text-2xl">$200K</p>
            <ul className="flex h-full flex-col gap-8 list-disc text-sm md:text-lg">
              <li>A flight around the Earth</li>
            </ul>
            <button className="border-4 border-black  bg-black text-white font-bold md:py-3 self-center w-1/2">
              BUY
            </button>
          </div>
          <div className="bg-white bg-opacity-80 md:h-[500px] md:w-72 gap-2 shadow-2xl p-8 flex flex-col">
            <p className="text-lg md:text-3xl font-black">ASTRONAUT</p>
            <p className="font-light md:text-2xl">$500K</p>
            <ul className="flex h-full flex-col gap-8 list-disc text-sm md:text-lg">
              <li>A flight around the Earth</li>
              <li>One hour of EVA</li>
            </ul>
            <button className="border-4 border-black  bg-black text-white font-bold md:py-3 self-center w-1/2">
              BUY
            </button>
          </div>
          <div className="bg-white bg-opacity-80 md:h-[500px] md:w-72 gap-2 shadow-2xl p-8 flex flex-col">
            <p className="text-lg md:text-3xl font-black">COPILOT</p>
            <p className="font-light md:text-2xl">$2.00M</p>
            <ul className=" flex h-full flex-col gap-8 list-disc text-sm md:text-lg">
              <li>A flight around the Earth</li>
              <li>One hour of EVA</li>
              <li>
                Allowed to perform small maneuvers <span className="text-xs">(under supervision)</span>
              </li>
            </ul>
            <button className="border-4 border-black  bg-black text-white font-bold md:py-3 self-center w-1/2">
              BUY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
