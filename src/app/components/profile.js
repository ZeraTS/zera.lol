"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

const Profile = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1 .2"],
  });

  const duration = 1;
  const initial = { opacity: 0, y: -100, scale: .7};
  const animate = { opacity: 1, y: 0, scale: 1};
  
  return (
    <motion.div
      className="flex flex-col h-auto items-center bg-neutral-800 w-[90%] rounded-2xl py-6"
      ref={ref}
      initial  = {initial}
      animate = {animate}
      duration = {duration}
      
      
    >
      <div className="flex flex-row justify-between w-full">
        <div className="justify-start items-center">
          <a className="flex items-center px-7 pt-1 transition hover:opacity-50">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.26087 0H1.95652C1.43762 0 0.939971 0.206133 0.573052 0.573052C0.206133 0.939971 0 1.43762 0 1.95652V6.26087C0 6.77977 0.206133 7.27742 0.573052 7.64434C0.939971 8.01126 1.43762 8.21739 1.95652 8.21739H6.26087C6.77977 8.21739 7.27742 8.01126 7.64434 7.64434C8.01126 7.27742 8.21739 6.77977 8.21739 6.26087V1.95652C8.21739 1.43762 8.01126 0.939971 7.64434 0.573052C7.27742 0.206133 6.77977 0 6.26087 0ZM5.86957 5.86957H2.34783V2.34783H5.86957V5.86957ZM6.26087 9.78261H1.95652C1.43762 9.78261 0.939971 9.98874 0.573052 10.3557C0.206133 10.7226 0 11.2202 0 11.7391V16.0435C0 16.5624 0.206133 17.06 0.573052 17.4269C0.939971 17.7939 1.43762 18 1.95652 18H6.26087C6.77977 18 7.27742 17.7939 7.64434 17.4269C8.01126 17.06 8.21739 16.5624 8.21739 16.0435V11.7391C8.21739 11.2202 8.01126 10.7226 7.64434 10.3557C7.27742 9.98874 6.77977 9.78261 6.26087 9.78261ZM5.86957 15.6522H2.34783V12.1304H5.86957V15.6522ZM16.0435 0H11.7391C11.2202 0 10.7226 0.206133 10.3557 0.573052C9.98874 0.939971 9.78261 1.43762 9.78261 1.95652V6.26087C9.78261 6.77977 9.98874 7.27742 10.3557 7.64434C10.7226 8.01126 11.2202 8.21739 11.7391 8.21739H16.0435C16.5624 8.21739 17.06 8.01126 17.4269 7.64434C17.7939 7.27742 18 6.77977 18 6.26087V1.95652C18 1.43762 17.7939 0.939971 17.4269 0.573052C17.06 0.206133 16.5624 0 16.0435 0ZM15.6522 5.86957H12.1304V2.34783H15.6522V5.86957ZM9.78261 13.3043V10.9565C9.78261 10.6452 9.90629 10.3466 10.1264 10.1264C10.3466 9.90629 10.6452 9.78261 10.9565 9.78261C11.2679 9.78261 11.5665 9.90629 11.7866 10.1264C12.0068 10.3466 12.1304 10.6452 12.1304 10.9565V13.3043C12.1304 13.6157 12.0068 13.9143 11.7866 14.1344C11.5665 14.3546 11.2679 14.4783 10.9565 14.4783C10.6452 14.4783 10.3466 14.3546 10.1264 14.1344C9.90629 13.9143 9.78261 13.6157 9.78261 13.3043ZM18 12.5217C18 12.8331 17.8763 13.1317 17.6562 13.3518C17.436 13.572 17.1374 13.6957 16.8261 13.6957H15.6522V16.8261C15.6522 17.1374 15.5285 17.436 15.3083 17.6562C15.0882 17.8763 14.7896 18 14.4783 18H10.9565C10.6452 18 10.3466 17.8763 10.1264 17.6562C9.90629 17.436 9.78261 17.1374 9.78261 16.8261C9.78261 16.5147 9.90629 16.2162 10.1264 15.996C10.3466 15.7759 10.6452 15.6522 10.9565 15.6522H13.3043V10.9565C13.3043 10.6452 13.428 10.3466 13.6482 10.1264C13.8683 9.90629 14.1669 9.78261 14.4783 9.78261C14.7896 9.78261 15.0882 9.90629 15.3083 10.1264C15.5285 10.3466 15.6522 10.6452 15.6522 10.9565V11.3478H16.8261C17.1374 11.3478 17.436 11.4715 17.6562 11.6917C17.8763 11.9118 18 12.2104 18 12.5217Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="justify-start items-center w-auto flex z-0">
          <a className="flex items-center pr-7 pt-1 transition hover:opacity-50">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10V16.4C2 16.8243 2.1712 17.2313 2.47595 17.5314C2.7807 17.8314 3.19402 18 3.625 18H13.375C13.806 18 14.2193 17.8314 14.524 17.5314C14.8288 17.2313 15 16.8243 15 16.4V10M11.75 5.2L8.5 2M8.5 2L5.25 5.2M8.5 2V12.4"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="rounded-full w-[60px] h-[60px] bg-neutral-700 mt-[20px] z-0 absolute" />
      <div className="flex flex-col justify-center items-center w-full h-auto gap-y-1 mt-[70px]">
        <h1 className="text-[20px] font-semibold">Paul Allen</h1>
        <p className="text-[14px] text-neutral-400 font-medium">
          Aspiring Developer
        </p>
        <a className="flex flex-row text-center justify-center items-center py-2.5 bg-neutral-700 rounded-3xl w-[85%] mt-3 transition hover:bg-neutral-600 hover:scale-95">
          <span className="text-white text-[15px] font-inter text-center font-semibold">
            Activities
          </span>
        </a>
      </div>
    </motion.div>
  );
};
export default Profile;
