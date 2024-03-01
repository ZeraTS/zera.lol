"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {

  return ( <>
            <div className="flex flex-col w-full h-auto gap-y-5 py-5 bg-neutral-800 mt-8">
            <a className="w-full h-auto flex text-green-500 items-center justify-center">
              <span className="text-[16px] font-semibold">Why CashApp</span>
            </a>
            <div className="w-[90%] h-[1px] bg-neutral-600 mx-auto"></div>
            <a className="w-full h-auto flex text-red-500 items-center justify-center">
              <span className="text-[16px] font-semibold">Kitty Party</span>
            </a>
          </div>
          <p className="text-neutral-400 text-center font-normal text-[14px] w-[90%] py-10">This is inspired heavily on Cash App's design. I claim no ownership lol.
          </p>
  </>  
  );
};
export default Footer;
