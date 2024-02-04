import React from "react";
import { Link } from "react-scroll";

const NavLinkMobileItem = ({ setToggle, href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold-1000 transition-all duration-300"
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLinkMobileItem;
