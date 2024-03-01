"use client";
import React from "react";
import { motion } from 'framer-motion';
import Profile from './profile'
import Invite from './invite'
import Socials from './socials'
import Footer from './footer'
import Navbar from './navbar'

const Main = () => {
  const fadeInDown = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  };
  return ( <>
      <section className="flex flex-col w-[100%] h-min-h-screen text-white items-center">    
  <motion.div variants={fadeInDown} initial="hidden" animate="visible">
  <Navbar/>
</motion.div>
<motion.div variants={fadeInDown} initial="hidden" animate="visible">
  <Profile/>
</motion.div>
<motion.div variants={fadeInDown} initial="hidden" animate="visible">
  <Invite/>
</motion.div>
<motion.div variants={fadeInDown} initial="hidden" animate="visible">
  <Socials/>
</motion.div>
<motion.div variants={fadeInDown} initial="hidden" animate="visible">
  <Footer/>
</motion.div>
    </section>
 </>  
  );
};
export default Main;
