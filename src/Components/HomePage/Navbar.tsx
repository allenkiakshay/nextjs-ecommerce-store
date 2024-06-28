"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Navbarvalues } from "@/constants/Homepage";

interface NavbarItem {
  name: string;
  url: string;
}

interface NavbarCategory {
  heading: string;
  values: NavbarItem[];
}

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div className="w-screen h-[100px] text-black flex items-center justify-between p-2 pl-20 pr-20">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={130} height={40} />
        </div>

        <div className="flex space-x-6">
          <a href="#">
            <p className="hover:text-gray-300">Home</p>
          </a>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 group cursor-pointer"
          >
            <p className="group-hover:text-gray-300">Shop</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down group-hover:text-gray-300"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>

          <a href="#">
            <p className="hover:text-gray-300">Our Story</p>
          </a>
          <a href="#">
            <p className="hover:text-gray-300">Blog</p>
          </a>
          <a href="#">
            <p className="hover:text-gray-300">Contact Us</p>
          </a>
        </div>

        <div className="flex space-x-6 items-center">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search hover:text-gray-300"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart hover:text-gray-300"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart hover:text-gray-300"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </a>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Sign In
          </button>
        </div>
      </div>

      {showDropdown && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-start pt-[96px] overflow-auto">
          <div className="w-[800px] max-h-[300px] bg-white grid grid-cols-4 grid-flow-row gap-10 justify-start items-start p-4 sm:p-8 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => setShowDropdown(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.354 4.354a.5.5 0 0 1 .708 0L8 7.293l3.938-3.939a.5.5 0 1 1 .708.708L8.707 8l3.939 3.938a.5.5 0 1 1-.708.708L8 8.707l-3.938 3.938a.5.5 0 1 1-.708-.708L7.293 8 3.354 4.062a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            {Navbarvalues.map((category, index) => (
              <div key={index} className="mb-4 w-fit">
                <h2 className="text-lg font-semibold mb-2">
                  {category.heading}
                </h2>
                <ul>
                  {category.values.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <a href={"#"} className="text-gray-500 hover:underline">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
