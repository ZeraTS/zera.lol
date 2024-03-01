"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

const Invite = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 .5", "1 .33"],
  });

  const duration = 0.3;
  const transition = { duration: duration }; // Define the transition
  const initial = { opacity: 0,  marginBottom: 10, ease: "easeInOut"};
  const animate = { opacity: 1, marginBottom: 0, ease: "easeInOut"};

  return (
    <motion.div whileHover={{ scale: 0.99, duration: 0.1 }}  transition = {transition} initial = {initial} animate={animate} duration = {duration} ref={ref} className="flex flex-row w-[90%] justify-between h-full items-center mt-5 px-5 py-5 gap-x-5 rounded-2xl bg-neutral-800 transition hover:bg-neutral-700">
      <div className="flex flex-row w-auto h-auto items-center gap-x-5 justify-start">
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-110"
        >
          <ellipse cx="16" cy="16.5" rx="16" ry="16.5" fill="#00D053" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.0088 11.1379C21.1838 11.0642 21.3754 11.0388 21.5636 11.0643C21.7518 11.0898 21.9297 11.1653 22.0789 11.2829C22.228 11.4005 22.3429 11.5559 22.4116 11.733C22.4802 11.91 22.5002 12.1022 22.4694 12.2896L20.8629 22.0342C20.707 22.9741 19.6757 23.5132 18.8137 23.045C18.0926 22.6533 17.0216 22.0498 16.0582 21.4201C15.5766 21.1048 14.1011 20.0955 14.2825 19.3772C14.4383 18.7631 16.9175 16.4554 18.3341 15.0833C18.8902 14.5443 18.6366 14.2333 17.98 14.7291C16.3494 15.9602 13.7314 17.8324 12.8658 18.3594C12.1022 18.824 11.7041 18.9034 11.2281 18.824C10.3597 18.6795 9.55433 18.4557 8.897 18.183C8.00875 17.8146 8.05196 16.5935 8.89629 16.2379L21.0088 11.1379Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col w-auto h-auto items-start gap-y-1">
          <p className="text-white font-semibold text-[16px]">Invite members</p>
          <p className="text-neutral-300 font-normal text-[13px] leading-3">
            Telegram Group
          </p>
        </div>
      </div>
      <div className="flex justify-end items-center w-auto h-auto">
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1332 1.13989C0.622268 1.65641 0.622268 2.49026 1.1332 3.00679L5.08382 7.00068L1.1332 10.9946C0.622268 11.5111 0.622268 12.3449 1.1332 12.8615C1.64562 13.3795 2.47511 13.3795 2.98753 12.8615L7.8668 7.92875C8.37773 7.41223 8.37773 6.57838 7.8668 6.06185L2.98753 1.12914C2.4841 0.620189 1.64397 0.623513 1.1332 1.13989Z"
            fill="#BBBBBB"
            stroke="#BBBBBB"
            stroke-width="0.5"
          />
        </svg>
      </div>
    </motion.div>
  );
};
export default Invite;
