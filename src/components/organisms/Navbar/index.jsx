import React, { useEffect, useState } from "react";
import { navLinks } from "../../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { NavLinkItem, NavLinkMobileItem } from "../../molecules";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-purple-700 uppercase tracking-wide font-extrabold cursor-pointer hover:text-purple-700 hover:underline">
              IRIS FUTURE FORGE
            </div>
          </div>
          <div className="sm:flex items-center hidden text-purple-700 ">
            {navLinks.map((navLink) => {
              return <NavLinkItem key={navLink.id} {...navLink} />;
            })}
          </div>

          <button className="py-3 px-6 text-yellow-400 hover:text-yellow-400 font-bold text-sm border border-solid rounded-lg border-yellow-400">
            Daftar
          </button>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-yellow-400 text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <NavLinkMobileItem
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
