import React from "react";
import { Link } from "react-router-dom";

const NavItemsInfo = [
  { name: "Dashboard", type: "link", href: "/" },
  { name: "Change-City", type: "link", href: "/city" },
];

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      <>
        <Link to={item.href} className="px-4 py-2">
          <span>{item.name}</span>
        </Link>
        <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
          \
        </span>
      </>
    </li>
  );
};

const Header = () => {
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-dark-soft">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div
          className={`
             right-0 transition-all duration-300 mt-0px text-white bg-dark-hard rounded-lg p-3 z-[49] flex flex-row w-auto justify-end static top-0 bottom-0 gap-x-9 items-center`}
        >
          <ul className="flex text-white flex-row items-center gap-y-5 gap-x-2 font-semibold">
            {NavItemsInfo.map((eachItem) => (
              <NavItem key={eachItem.name} item={eachItem} />
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
