"use client";
import { useSession } from "next-auth/react";
import {
  LoginButton,
  LogoutButton,
  MenuButton,
  CloseButton,
} from "./button.component";
import Link from "next/link";
import react, { useEffect, useState, useRef } from "react";

export const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      const navLinks = document.querySelector(".nav-links");
      navLinks?.classList.toggle("top-[9%]");
    } else {
      notInitialRender.current = true;
    }
  }, [isOpen]);

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[70%]  mx-auto py-2.5">
        <div>
          <Link href="/">
            <svg
              className="h-10 w-10 mr-1 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </Link>
        </div>
        <div className="nav-links justify-center duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-4">
            <li>
              <Link className="hover:text-gray-500" href="#">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="#">
                Solution
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="#">
                Resource
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="#">
                Developers
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="#">
                Pricing
              </Link>
            </li>
            <li>{session ? <LogoutButton /> : <LoginButton />}</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <CloseButton /> : <MenuButton />}
          </button>
        </div>
      </nav>
    </header>
  );
};
