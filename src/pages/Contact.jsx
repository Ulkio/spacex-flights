import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white h-screen dark:bg-dark-mode ">
      <div className="flex flex-col h-full items-center justify-evenly ">
        <h2 className="text-2xl md:text-6xl font-black dark:text-white">Contact us</h2>
        <form action="" method="POST">
          <div className="flex flex-col gap-16 w-full">
            <div className=" flex md:flex-row flex-col gap-4">
              <input className=" border-4 border-black p-4" type="text" name="name" id="name" placeholder="Name" />
              <input className=" border-4 border-black p-4 " type="text" name="email" id="email" placeholder="Email" />
            </div>
            <textarea
              className=" border-4 border-black p-4 resize-none"
              name="message"
              id="message"
              cols="20"
              rows="5"
              placeholder="Message"
            />
            <button
              className=" font-bold px-8 py-3 border-4 border-black  bg-black text-white dark:border-white dark:bg-white dark:text-black"
              type="submit">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
