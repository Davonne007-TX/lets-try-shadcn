"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import MyButton from "./MyButton";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobile = () => setIsOpen(!isOpen);

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* desktop view  */}
      <NavigationMenu className="hidden md:flex text-white mr-28">
        <NavigationMenuList className="flex font-serif mt-4 gap-6 p-2 rounded-full">
          {["About", "Menu", "Catering", "Locations"].map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink className="text-2xl cursor-pointer">
                {item}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* mobile nav */}
      <div className="md:hidden absolute right-4 top-2 text-4xl">
        <button onClick={toggleMobile} className="text-white">
          ☰
        </button>

        {isOpen && (
          <>
            <ul className="absolute right-0 flex flex-col gap-4 mt-2 bg-black font-bold  text-white rounded-md shadow-md z-50 p-4 space-y-3 w-60">
              {["About", "Menu", "Catering", "Locations"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-2xl hover:underline "
                  onClick={closeMobileNav}
                >
                  {item}
                </li>
              ))}
              <MyButton
                btnTxt={"Order Now"}
                btnStyles={"text-xl bg-white text-black hover:bg-red-500"}
              />
            </ul>
          </>
        )}
      </div>
    </>
  );
}
