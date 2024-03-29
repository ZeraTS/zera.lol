import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { useScroll } from "framer-motion"
import './globals.css'
import Profile from './components/profile'
import Invite from './components/invite'
import Socials from './components/socials'
import Footer from './components/footer'
import Navbar from './components/navbar'
export default function Home() { 
  
  /*
  return (
   <> 
<section className="relative min-h-screen w-auto h-[100%] items-center justify-center flex flex-col bg-black">
  <div className="items-center w-full h-full flex flex-col justify-center bg-black">
    <div className="bg-neutral-950 w-[95%]  py-8 px-8 rounded-xl flex flex-col gap-y-5">
      <div className="flex flex-col w-full h-full gap-y-1 items-center">
        <h1 className="text-white font-inter text-[20px] font-bold">Paul</h1>
        <p className="text-gray-400 font-inter font-noormal text-[15px]">Frontend Developer</p>
      </div>
      <div className="flex flex-col w-full h-full gap-y-2">
        <button className="relative bg-neutral-900 border border-neutral-900 rounded-md py-4 text-center justify-start text-white flex items-center transition hover:border hover:border-neutral-700">
          <DiscordLogoIcon className="absolute left-5 h-5 w-5"/>
          <span className="w-full">Discord</span>
        </button>
        <button className="relative bg-neutral-900 rounded-md py-4 text-center justify-start text-white flex items-center">
          <InstagramLogoIcon className="absolute left-5 h-5 w-5"/>
          <span className="w-full">Instagram</span>
        </button>
        <button className="relative bg-neutral-900 rounded-md py-4 text-center justify-start text-white flex items-center">
          <FigmaLogoIcon className="absolute left-5 h-5 w-5"/>
          <span className="w-full">Figma</span>
        </button>
        <button className="relative bg-neutral-900 rounded-md py-4 text-center justify-start text-white flex items-center">
          <LinkedInLogoIcon className="absolute left-5 h-5 w-5"/>
          <span className="w-full">Linked In</span>
        </button>
        <button className="relative bg-neutral-900 rounded-md py-4 text-center justify-start text-white flex items-center">
          <GitHubLogoIcon className="absolute left-5 h-5 w-5"/>
          <span className="w-full">GitHub</span>
        </button>
      </div>
    </div>
  </div>
</section> 

   </>
  );
  */
 return (
  <>
  <main className="flex flex-col w-full min-h-screen bg-neutral-900 font-jakarta">
    <section className="flex flex-col w-full h-full text-white items-center">
        <Navbar/>
        <Profile/>
        <Invite/>
        <Socials/>
        <Footer/>
    </section>
  </main>
  </>
 )
}
