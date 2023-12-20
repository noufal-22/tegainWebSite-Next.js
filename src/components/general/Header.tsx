"use client";

import React, { useState } from "react";
import Link from "next/link";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    // const [active, setActive] = ("'")
    // onClick={()=> {
    //     setActive("")
    //   }}

    return (
        <div className="fixed w-full top-0 z-10 bg-[#EFF4F9] mb-[50px]">
            <div className=" wrapper">
                <div className="flex w-full justify-between items-center m-0 py-[25px] ">
                    <h1 className=" w-[150px] max-md:w-[130px]">
                        <Link href="/"
                         >
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/07-11-2023/tegain-main.svg"
                                alt="icon"
                            />
                        </Link>
                    </h1>
                    <div>
                        <div className="hidden md:flex items-center  text-[#666] gordita_medium">
                            <Link href="/#spotlight" onClick={closeMenu}>
                                Home
                            </Link>
                            <Link
                                href="/#about"
                                className="ml-[40px]"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                            <Link
                                href="/#services"
                                className="ml-[40px]"
                                onClick={closeMenu}
                            >
                                Services
                            </Link>
                            <Link
                                href="/contact-us"
                                className="ml-[40px]"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="flex items-center">
                            {/* Conditionally render the button for screens below sm */}
                            <button
                                onClick={toggleMenu}
                                className={`md:hidden focus:outline-none ${
                                    menuOpen
                                        ? "text-blue-500"
                                        : "text-[#1F5085]"
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                >
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="lg:hidden text-[#1F5085] gordita_medium items-center flex flex-col  bg-[#EFF4F9]">
                    {/* Add your menu items here */}
                    {/* For example: */}
                    <Link href="/" className="mb-[2rem]" onClick={closeMenu}>
                        Home
                    </Link>

                    <Link
                        href="/#about"
                        className="mb-[2rem]"
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link
                        href="/#services"
                        className="mb-[2rem]"
                        onClick={closeMenu}
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact-us"
                        className="mb-[2rem]"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
