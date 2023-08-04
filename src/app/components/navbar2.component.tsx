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
  const menuItems = [
    {
      Name: "เกี่ยวกับเรา",
      Link: "#",
    },
    {
      Name: "ผลิตภัณฑ์",
      Link: "#",
    },
    {
      Name: "ผลงาน",
      Link: "#",
    },
    {
      Name: "บทความ",
      Link: "#",
    },
    {
      Name: "ติดต่อ",
      Link: "#",
    },
  ];
  const { data: session } = useSession();

  const onTogglebutton = () => {
    const menu = document.querySelector(".mobile-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* <!-- logo --> */}
            <div>
              <Link href="#" className="flex items-center py-5 px-2">
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
                <span> Kidjy Dev </span>
              </Link>
            </div>
            {/* <!-- nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((menu, index) => {
                return (
                  <Link
                    href={menu.Link}
                    className="py-4 px-4 hover:bg-yellow-300"
                    key={index}
                  >
                    {menu.Name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <!-- menu --> */}
          <div className="hidden md:flex items-center space-x-1">
            {session ? <LogoutButton /> : <LoginButton />}
            {/* <Link href="/signin" className="py-5 px-3">
              Sign In
            </Link> */}
          </div>

          {/* <!--         mobile button goes here --> */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={onTogglebutton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mobile-menu navbar-moblie hidden md:hidden text-center">
          {menuItems.map((menu, index) => {
            return (
              <Link
                href={menu.Link}
                className="block py-2 px-4 test-sm hover:bg-yellow-200"
                key={index}
              >
                {menu.Name}
              </Link>
            );
          })}
          {session ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
};
