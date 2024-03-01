import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { DiscordLogoIcon }  from "@radix-ui/react-icons"
import { InstagramLogoIcon }  from "@radix-ui/react-icons"
import { TwitterLogoIcon }  from "@radix-ui/react-icons"
import { GitHubLogoIcon }  from "@radix-ui/react-icons"
import { FigmaLogoIcon }  from "@radix-ui/react-icons"
import { LinkedInLogoIcon }  from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() { /*
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
      <div className="flex flex-row w-full items-center justify-between pt-5 pb-5 pl-5 pr-5 bg-neutral-900 sticky top-0 z-10 shadow-sm">
        <div className="justify-start items-center w-auto flex">
        <h1 className="text-[20px] font-semibold justify-start">Your Designer</h1>
        </div>
        <div className="justify-end items-center w-auto flex">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.23722 13.7272L7.5074 9.46185L11.7793 13.7289C12.0398 13.9891 12.393 14.1352 12.7613 14.1352C13.1295 14.1352 13.4827 13.9891 13.7432 13.7289C14.0036 13.4688 14.15 13.1159 14.15 12.7479C14.15 12.3799 14.0036 12.027 13.7432 11.7668L13.7432 11.7668L9.46987 7.49999L13.7424 3.23319L13.7424 3.23315C13.8713 3.10433 13.9735 2.9514 14.0433 2.78309C14.113 2.61478 14.1489 2.43439 14.1489 2.25221C14.1488 2.07004 14.1129 1.88967 14.043 1.72139C13.9732 1.55311 13.8709 1.40023 13.7419 1.27147C13.613 1.14271 13.4599 1.04059 13.2914 0.970942C13.123 0.901291 12.9424 0.865466 12.7601 0.865509C12.5778 0.865552 12.3973 0.901461 12.2289 0.971192C12.0604 1.04092 11.9074 1.14311 11.7785 1.27193L7.50739 5.53896L3.23638 1.27282C3.10856 1.14077 2.95576 1.0354 2.78684 0.962832C2.61751 0.89008 2.43537 0.851744 2.25105 0.850058C2.06673 0.848372 1.88392 0.883369 1.71328 0.95301C1.54264 1.02265 1.38758 1.12555 1.25716 1.2557C1.12673 1.38585 1.02356 1.54066 0.953656 1.71108C0.883755 1.88151 0.848532 2.06414 0.850047 2.24832C0.851562 2.4325 0.889784 2.61453 0.962478 2.78379C1.035 2.95265 1.14039 3.10542 1.2725 3.23323L5.54495 7.50001L1.27333 11.7668C1.14122 11.8946 1.03583 12.0473 0.963304 12.2162C0.89061 12.3855 0.852387 12.5675 0.850872 12.7517C0.849358 12.9359 0.884581 13.1185 0.954482 13.2889C1.02438 13.4593 1.12756 13.6141 1.25798 13.7443C1.38841 13.8745 1.54347 13.9773 1.71411 14.047C1.88475 14.1166 2.06756 14.1516 2.25188 14.1499C2.43619 14.1483 2.61833 14.1099 2.78767 14.0372C2.95659 13.9646 3.10939 13.8592 3.23722 13.7272Z" fill="white" stroke="white" stroke-width="0.3"/> </svg> 
        </div>
        </div>
        <div className="flex flex-col h-auto items-center bg-neutral-800 w-[90%] rounded-2xl py-6">
          <div className="flex flex-row justify-between w-full">
          <div className="justify-start items-center">
          <a className="flex items-center px-7 pt-1 transition hover:opacity-50">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.26087 0H1.95652C1.43762 0 0.939971 0.206133 0.573052 0.573052C0.206133 0.939971 0 1.43762 0 1.95652V6.26087C0 6.77977 0.206133 7.27742 0.573052 7.64434C0.939971 8.01126 1.43762 8.21739 1.95652 8.21739H6.26087C6.77977 8.21739 7.27742 8.01126 7.64434 7.64434C8.01126 7.27742 8.21739 6.77977 8.21739 6.26087V1.95652C8.21739 1.43762 8.01126 0.939971 7.64434 0.573052C7.27742 0.206133 6.77977 0 6.26087 0ZM5.86957 5.86957H2.34783V2.34783H5.86957V5.86957ZM6.26087 9.78261H1.95652C1.43762 9.78261 0.939971 9.98874 0.573052 10.3557C0.206133 10.7226 0 11.2202 0 11.7391V16.0435C0 16.5624 0.206133 17.06 0.573052 17.4269C0.939971 17.7939 1.43762 18 1.95652 18H6.26087C6.77977 18 7.27742 17.7939 7.64434 17.4269C8.01126 17.06 8.21739 16.5624 8.21739 16.0435V11.7391C8.21739 11.2202 8.01126 10.7226 7.64434 10.3557C7.27742 9.98874 6.77977 9.78261 6.26087 9.78261ZM5.86957 15.6522H2.34783V12.1304H5.86957V15.6522ZM16.0435 0H11.7391C11.2202 0 10.7226 0.206133 10.3557 0.573052C9.98874 0.939971 9.78261 1.43762 9.78261 1.95652V6.26087C9.78261 6.77977 9.98874 7.27742 10.3557 7.64434C10.7226 8.01126 11.2202 8.21739 11.7391 8.21739H16.0435C16.5624 8.21739 17.06 8.01126 17.4269 7.64434C17.7939 7.27742 18 6.77977 18 6.26087V1.95652C18 1.43762 17.7939 0.939971 17.4269 0.573052C17.06 0.206133 16.5624 0 16.0435 0ZM15.6522 5.86957H12.1304V2.34783H15.6522V5.86957ZM9.78261 13.3043V10.9565C9.78261 10.6452 9.90629 10.3466 10.1264 10.1264C10.3466 9.90629 10.6452 9.78261 10.9565 9.78261C11.2679 9.78261 11.5665 9.90629 11.7866 10.1264C12.0068 10.3466 12.1304 10.6452 12.1304 10.9565V13.3043C12.1304 13.6157 12.0068 13.9143 11.7866 14.1344C11.5665 14.3546 11.2679 14.4783 10.9565 14.4783C10.6452 14.4783 10.3466 14.3546 10.1264 14.1344C9.90629 13.9143 9.78261 13.6157 9.78261 13.3043ZM18 12.5217C18 12.8331 17.8763 13.1317 17.6562 13.3518C17.436 13.572 17.1374 13.6957 16.8261 13.6957H15.6522V16.8261C15.6522 17.1374 15.5285 17.436 15.3083 17.6562C15.0882 17.8763 14.7896 18 14.4783 18H10.9565C10.6452 18 10.3466 17.8763 10.1264 17.6562C9.90629 17.436 9.78261 17.1374 9.78261 16.8261C9.78261 16.5147 9.90629 16.2162 10.1264 15.996C10.3466 15.7759 10.6452 15.6522 10.9565 15.6522H13.3043V10.9565C13.3043 10.6452 13.428 10.3466 13.6482 10.1264C13.8683 9.90629 14.1669 9.78261 14.4783 9.78261C14.7896 9.78261 15.0882 9.90629 15.3083 10.1264C15.5285 10.3466 15.6522 10.6452 15.6522 10.9565V11.3478H16.8261C17.1374 11.3478 17.436 11.4715 17.6562 11.6917C17.8763 11.9118 18 12.2104 18 12.5217Z" fill="white"/>
</svg>

            </a>
          </div>
            <div className="justify-start items-center w-auto flex z-0">
            <a className="flex items-center pr-7 pt-1 transition hover:opacity-50">
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10V16.4C2 16.8243 2.1712 17.2313 2.47595 17.5314C2.7807 17.8314 3.19402 18 3.625 18H13.375C13.806 18 14.2193 17.8314 14.524 17.5314C14.8288 17.2313 15 16.8243 15 16.4V10M11.75 5.2L8.5 2M8.5 2L5.25 5.2M8.5 2V12.4" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </a>
           </div>
          </div>
          <div className="rounded-full w-[60px] h-[60px] bg-neutral-700 mt-[20px] z-0 absolute"/>

          <div className="flex flex-col justify-center items-center w-full h-auto gap-y-1 mt-[70px]">
          <h1 className="text-[20px] font-semibold">Paul Allen</h1>
          <p className="text-[14px] text-neutral-400 font-medium">Aspiring Developer</p>
          <a className="flex flex-row text-center justify-center items-center py-2.5 bg-neutral-700 rounded-3xl w-[85%] mt-3 transition hover:bg-neutral-600 hover:scale-95">
          <span className="text-white text-[15px] font-inter text-center font-semibold">Activities</span>
          </a>
          </div>
        </div>
        <div className="flex flex-row w-[90%] justify-between h-full items-center mt-5 px-5 py-5 gap-x-5 rounded-2xl bg-neutral-800 transition hover:bg-neutral-700 ">
        <div className="flex flex-row w-auto h-auto items-center gap-x-5 justify-start">
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-110">
<ellipse cx="16" cy="16.5" rx="16" ry="16.5" fill="#00D053"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0088 11.1379C21.1838 11.0642 21.3754 11.0388 21.5636 11.0643C21.7518 11.0898 21.9297 11.1653 22.0789 11.2829C22.228 11.4005 22.3429 11.5559 22.4116 11.733C22.4802 11.91 22.5002 12.1022 22.4694 12.2896L20.8629 22.0342C20.707 22.9741 19.6757 23.5132 18.8137 23.045C18.0926 22.6533 17.0216 22.0498 16.0582 21.4201C15.5766 21.1048 14.1011 20.0955 14.2825 19.3772C14.4383 18.7631 16.9175 16.4554 18.3341 15.0833C18.8902 14.5443 18.6366 14.2333 17.98 14.7291C16.3494 15.9602 13.7314 17.8324 12.8658 18.3594C12.1022 18.824 11.7041 18.9034 11.2281 18.824C10.3597 18.6795 9.55433 18.4557 8.897 18.183C8.00875 17.8146 8.05196 16.5935 8.89629 16.2379L21.0088 11.1379Z" fill="white"/>
</svg>
          <div className="flex flex-col w-auto h-auto items-start gap-y-1">
          <p className="text-white font-semibold text-[16px]">Invite members</p>
          <p className="text-neutral-300 font-normal text-[13px] leading-3">Telegram Group</p>
            </div>
        </div>
        <div className="flex justify-end items-center w-auto h-auto">
        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1332 1.13989C0.622268 1.65641 0.622268 2.49026 1.1332 3.00679L5.08382 7.00068L1.1332 10.9946C0.622268 11.5111 0.622268 12.3449 1.1332 12.8615C1.64562 13.3795 2.47511 13.3795 2.98753 12.8615L7.8668 7.92875C8.37773 7.41223 8.37773 6.57838 7.8668 6.06185L2.98753 1.12914C2.4841 0.620189 1.64397 0.623513 1.1332 1.13989Z" fill="#BBBBBB" stroke="#BBBBBB" stroke-width="0.5"/>
</svg>
          </div>
         </div>
        <div className="flex flex-col w-full h-auto items-start mt-5 px-7">
        <p className="text-neutral-400 font-bold text-[12px] mt-5 mb-2">ACCOUNT & SOCIALS</p>
        </div>
        <div className="flex flex-col w-full bg-neutral-800 h-auto py-5 gap-y-0 ">
            <div className="w-full h-auto flex flex-row justify-between gap-x-5 transition hover:bg-neutral-700" id="portfolio">
              <div className="flex flex-row w-auto px-[30px] py-5 items-center justify-start gap-x-5">
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C4.58369 0 2.625 1.90273 2.625 4.25C2.625 6.59728 4.58369 8.5 7 8.5C9.41631 8.5 11.375 6.59728 11.375 4.25C11.375 1.90273 9.41631 0 7 0ZM1.85938 10.2C1.36631 10.2 0.893441 10.3902 0.544753 10.7289C0.196065 11.0675 0.000116014 11.5269 0 12.0058V12.325C0 13.9209 0.849625 15.116 2.1525 15.8865C3.43438 16.6443 5.15637 17 7 17C8.84363 17 10.5656 16.6443 11.8475 15.8865C13.1504 15.116 14 13.9209 14 12.325V12.0058C14 11.7686 13.9519 11.5338 13.8585 11.3147C13.765 11.0955 13.628 10.8965 13.4554 10.7288C13.2827 10.5611 13.0777 10.4281 12.8521 10.3373C12.6266 10.2466 12.3848 10.1999 12.1406 10.2H1.85938Z" fill="white"/>
</svg>
              <p className="text-white font-semibold text-[16px]">Portfolio</p>
              </div>
              <div className="flex w-auto h-auto items-center justify-end mr-[30px]">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1332 1.13989C0.622268 1.65641 0.622268 2.49026 1.1332 3.00679L5.08382 7.00068L1.1332 10.9946C0.622268 11.5111 0.622268 12.3449 1.1332 12.8615C1.64562 13.3795 2.47511 13.3795 2.98753 12.8615L7.8668 7.92875C8.37773 7.41223 8.37773 6.57838 7.8668 6.06185L2.98753 1.12914C2.4841 0.620189 1.64397 0.623513 1.1332 1.13989Z" fill="#BBBBBB" stroke="#BBBBBB" stroke-width="0.5"/>
</svg>

                </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-between gap-x-5 transition hover:bg-neutral-700" id="discord">
              <div className="flex flex-row w-auto px-[30px] py-5 items-center justify-start gap-x-4">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5899 1.88991C15.3599 1.31991 14.0499 0.899912 12.6699 0.659912C12.4999 0.959912 12.2999 1.36991 12.1699 1.69991C10.7099 1.47991 9.25995 1.47991 7.82995 1.69991C7.68995 1.36991 7.48995 0.959912 7.31995 0.659912C5.93995 0.899912 4.62995 1.31991 3.39995 1.88991C0.919946 5.62991 0.249946 9.27991 0.579946 12.8699C2.22995 14.0999 3.81995 14.8399 5.38995 15.3299C5.77995 14.7999 6.11995 14.2299 6.41995 13.6399C5.84995 13.4299 5.30995 13.1599 4.79995 12.8499C4.93995 12.7499 5.06995 12.6399 5.19995 12.5399C8.32995 13.9999 11.7199 13.9999 14.8099 12.5399C14.9399 12.6499 15.0699 12.7499 15.2099 12.8499C14.6999 13.1599 14.1499 13.4199 13.5899 13.6399C13.8899 14.2299 14.2299 14.7999 14.6199 15.3299C16.1899 14.8399 17.7899 14.0999 19.4299 12.8699C19.8199 8.69991 18.7599 5.08991 16.6099 1.88991H16.5899ZM6.83995 10.6699C5.89995 10.6699 5.12995 9.79991 5.12995 8.72991C5.12995 7.65991 5.87995 6.78991 6.83995 6.78991C7.79995 6.78991 8.55995 7.65991 8.54995 8.72991C8.54995 9.78991 7.79995 10.6699 6.83995 10.6699ZM13.1499 10.6699C12.2099 10.6699 11.4399 9.79991 11.4399 8.72991C11.4399 7.65991 12.1899 6.78991 13.1499 6.78991C14.1099 6.78991 14.8699 7.65991 14.8599 8.72991C14.8599 9.78991 14.1099 10.6699 13.1499 10.6699Z" fill="white"/>
</svg>

              <p className="text-white font-semibold text-[16px]">Discord</p>
              </div>
              <div className="flex w-auto h-auto items-center justify-end mr-[30px]">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1332 1.13989C0.622268 1.65641 0.622268 2.49026 1.1332 3.00679L5.08382 7.00068L1.1332 10.9946C0.622268 11.5111 0.622268 12.3449 1.1332 12.8615C1.64562 13.3795 2.47511 13.3795 2.98753 12.8615L7.8668 7.92875C8.37773 7.41223 8.37773 6.57838 7.8668 6.06185L2.98753 1.12914C2.4841 0.620189 1.64397 0.623513 1.1332 1.13989Z" fill="#BBBBBB" stroke="#BBBBBB" stroke-width="0.5"/>
</svg>

                </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-between gap-x-5 transition hover:bg-neutral-700" id="tiktok">
              <div className="flex flex-row w-auto px-[30px] py-5 items-center justify-start gap-x-5">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6 2.82C11.9165 2.03962 11.5397 1.03743 11.54 0H8.45003V12.4C8.4262 13.071 8.1429 13.7066 7.6598 14.1729C7.17669 14.6393 6.53148 14.8999 5.86003 14.9C4.44003 14.9 3.26003 13.74 3.26003 12.3C3.26003 10.58 4.92003 9.29 6.63003 9.82V6.66C3.18003 6.2 0.160034 8.88 0.160034 12.3C0.160034 15.63 2.92003 18 5.85003 18C8.99003 18 11.54 15.45 11.54 12.3V6.01C12.793 6.90985 14.2974 7.39265 15.84 7.39V4.3C15.84 4.3 13.96 4.39 12.6 2.82Z" fill="white"/>
</svg>


              <p className="text-white font-semibold text-[16px]">TikTok</p>
              </div>
              <div className="flex w-auto h-auto items-center justify-end mr-[30px]">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1332 1.13989C0.622268 1.65641 0.622268 2.49026 1.1332 3.00679L5.08382 7.00068L1.1332 10.9946C0.622268 11.5111 0.622268 12.3449 1.1332 12.8615C1.64562 13.3795 2.47511 13.3795 2.98753 12.8615L7.8668 7.92875C8.37773 7.41223 8.37773 6.57838 7.8668 6.06185L2.98753 1.12914C2.4841 0.620189 1.64397 0.623513 1.1332 1.13989Z" fill="#BBBBBB" stroke="#BBBBBB" stroke-width="0.5"/>
</svg>

                </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-between gap-x-5 transition hover:bg-neutral-700" id="instagram">
              <div className="flex flex-row w-auto px-[30px] py-5 items-center justify-start gap-x-5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.92521 0C10.9377 0.00269994 11.4515 0.00809981 11.8952 0.0206995L12.0698 0.0269993C12.2714 0.0341992 12.4703 0.0431989 12.7106 0.0539987C13.6681 0.0989976 14.3215 0.250194 14.8948 0.472489C15.4887 0.701084 15.9891 1.01068 16.4895 1.51016C16.9471 1.96006 17.3012 2.50427 17.5271 3.10493C17.7494 3.67821 17.9006 4.3316 17.9456 5.29008C17.9564 5.52947 17.9654 5.72837 17.9726 5.93086L17.978 6.10546C17.9915 6.54825 17.9969 7.06214 17.9987 8.07461L17.9996 8.746V9.92497C18.0018 10.5814 17.9949 11.2379 17.9789 11.8941L17.9735 12.0687C17.9663 12.2712 17.9573 12.4701 17.9465 12.7095C17.9015 13.668 17.7485 14.3205 17.5271 14.8947C17.3018 15.4956 16.9477 16.04 16.4895 16.4894C16.0395 16.9469 15.4953 17.301 14.8948 17.5271C14.3215 17.7494 13.6681 17.9006 12.7106 17.9456C12.497 17.9556 12.2834 17.9646 12.0698 17.9726L11.8952 17.978C11.4515 17.9906 10.9377 17.9969 9.92521 17.9987L9.25384 17.9996H8.07581C7.41907 18.0018 6.76234 17.9949 6.10581 17.9789L5.93122 17.9735C5.71758 17.9654 5.50398 17.9561 5.29045 17.9456C4.3329 17.9006 3.67953 17.7494 3.10536 17.5271C2.50479 17.3015 1.96081 16.9474 1.51154 16.4894C1.05351 16.0397 0.699085 15.4954 0.472995 14.8947C0.250707 14.3214 0.0995142 13.668 0.0545165 12.7095C0.0444899 12.496 0.0354903 12.2824 0.0275179 12.0687L0.0230182 11.8941C0.0064339 11.2379 -0.00106652 10.5814 0.000519274 9.92497V8.07461C-0.00199247 7.41817 0.0046079 6.76172 0.0203183 6.10546L0.026618 5.93086C0.0338176 5.72837 0.0428171 5.52947 0.0536166 5.29008C0.0986143 4.3316 0.249806 3.67911 0.472095 3.10493C0.698086 2.50366 1.05321 1.95928 1.51244 1.51016C1.9616 1.0525 2.50522 0.698372 3.10536 0.472489C3.67953 0.250194 4.332 0.0989976 5.29045 0.0539987C5.52984 0.0431989 5.72963 0.0341992 5.93122 0.0269993L6.10581 0.0215994C6.76205 0.00560931 7.41848 -0.0012912 8.07491 0.000899914L9.92521 0ZM9.00006 4.49989C7.80665 4.49989 6.66211 4.97399 5.81824 5.81788C4.97437 6.66178 4.50029 7.80634 4.50029 8.99979C4.50029 10.1932 4.97437 11.3378 5.81824 12.1817C6.66211 13.0256 7.80665 13.4997 9.00006 13.4997C10.1935 13.4997 11.338 13.0256 12.1819 12.1817C13.0257 11.3378 13.4998 10.1932 13.4998 8.99979C13.4998 7.80634 13.0257 6.66178 12.1819 5.81788C11.338 4.97399 10.1935 4.49989 9.00006 4.49989ZM9.00006 6.29985C9.35461 6.29979 9.7057 6.36957 10.0333 6.5052C10.3609 6.64083 10.6585 6.83966 10.9093 7.09033C11.16 7.341 11.3589 7.6386 11.4947 7.96615C11.6304 8.2937 11.7003 8.64478 11.7004 8.99934C11.7004 9.3539 11.6307 9.705 11.495 10.0326C11.3594 10.3602 11.1606 10.6579 10.9099 10.9086C10.6593 11.1594 10.3617 11.3583 10.0341 11.494C9.70658 11.6298 9.35551 11.6997 9.00096 11.6997C8.28491 11.6997 7.59819 11.4153 7.09187 10.9089C6.58555 10.4026 6.3011 9.71586 6.3011 8.99979C6.3011 8.28372 6.58555 7.59698 7.09187 7.09065C7.59819 6.58431 8.28491 6.29985 9.00096 6.29985M13.7257 3.14993C13.4274 3.14993 13.1412 3.26845 12.9303 3.47942C12.7193 3.6904 12.6008 3.97654 12.6008 4.2749C12.6008 4.57326 12.7193 4.8594 12.9303 5.07038C13.1412 5.28135 13.4274 5.39987 13.7257 5.39987C14.0241 5.39987 14.3102 5.28135 14.5212 5.07038C14.7321 4.8594 14.8507 4.57326 14.8507 4.2749C14.8507 3.97654 14.7321 3.6904 14.5212 3.47942C14.3102 3.26845 14.0241 3.14993 13.7257 3.14993Z" fill="white"/>
</svg>



              <p className="text-white font-semibold text-[16px]">Instagram</p>
              </div>
              <div className="flex w-auto h-auto items-center justify-end mr-[30px]">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1332 1.13989C0.622268 1.65641 0.622268 2.49026 1.1332 3.00679L5.08382 7.00068L1.1332 10.9946C0.622268 11.5111 0.622268 12.3449 1.1332 12.8615C1.64562 13.3795 2.47511 13.3795 2.98753 12.8615L7.8668 7.92875C8.37773 7.41223 8.37773 6.57838 7.8668 6.06185L2.98753 1.12914C2.4841 0.620189 1.64397 0.623513 1.1332 1.13989Z" fill="#BBBBBB" stroke="#BBBBBB" stroke-width="0.5"/>
</svg>

                </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-between gap-x-5 transition hover:bg-neutral-700" id="snapchat">
              <div className="flex flex-row w-auto px-[30px] py-5 items-center justify-start gap-x-4">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.87198 18.765C8.68198 18.765 7.88798 18.203 7.17898 17.708C6.67498 17.351 6.20298 17.012 5.64598 16.918C5.38078 16.8724 5.11207 16.8503 4.84298 16.852C4.37098 16.852 3.99598 16.923 3.72898 16.977C3.55898 17.007 3.41698 17.035 3.30498 17.035C3.18898 17.035 3.04198 17.003 2.98498 16.807C2.93498 16.647 2.90398 16.495 2.87298 16.348C2.79298 15.978 2.72598 15.751 2.58698 15.728C1.09798 15.501 0.206979 15.158 0.0329789 14.752C0.0189789 14.708 0.00197903 14.662 0.00197903 14.627C-0.00802097 14.503 0.081979 14.4 0.206979 14.377C1.38798 14.182 2.44898 13.553 3.34498 12.519C4.04098 11.716 4.37998 10.94 4.41098 10.856C4.41098 10.846 4.41998 10.846 4.41998 10.846C4.58998 10.495 4.62498 10.196 4.52198 9.951C4.32998 9.491 3.69698 9.295 3.26498 9.161C3.15398 9.131 3.05998 9.095 2.97998 9.068C2.60998 8.921 1.99398 8.608 2.07498 8.176C2.13298 7.864 2.54698 7.641 2.88598 7.641C2.97998 7.641 3.05998 7.655 3.12598 7.691C3.50598 7.864 3.84898 7.953 4.14298 7.953C4.50898 7.953 4.68298 7.815 4.72698 7.771C4.71767 7.5732 4.706 7.37552 4.69198 7.178C4.60198 5.813 4.49998 4.119 4.93198 3.148C6.22998 0.241 8.98498 0.0079999 9.80098 0.0079999L10.157 0H10.207C11.022 0 13.777 0.227 15.075 3.139C15.512 4.11 15.405 5.809 15.315 7.169L15.306 7.236C15.298 7.418 15.284 7.592 15.276 7.771C15.32 7.806 15.48 7.94 15.81 7.944C16.096 7.936 16.408 7.842 16.764 7.681C16.8625 7.63841 16.9686 7.61597 17.076 7.615C17.201 7.615 17.326 7.645 17.433 7.681H17.442C17.741 7.793 17.937 8.002 17.937 8.221C17.946 8.426 17.785 8.738 17.023 9.046C16.943 9.076 16.849 9.113 16.738 9.139C16.314 9.269 15.681 9.474 15.48 9.929C15.369 10.169 15.413 10.477 15.583 10.825C15.583 10.833 15.592 10.833 15.592 10.833C15.641 10.958 16.929 13.883 19.796 14.36C19.8546 14.3699 19.9076 14.4006 19.9453 14.4466C19.983 14.4926 20.0028 14.5506 20.001 14.61C20.0017 14.6549 19.991 14.6993 19.97 14.739C19.796 15.149 18.913 15.483 17.415 15.715C17.277 15.737 17.21 15.965 17.13 16.335C17.0982 16.4892 17.0612 16.6423 17.019 16.794C16.974 16.941 16.88 17.021 16.719 17.021H16.698C16.5554 17.0182 16.4134 17.0018 16.274 16.972C15.9075 16.8939 15.5337 16.855 15.159 16.856C14.8903 16.8566 14.6221 16.879 14.357 16.923C13.804 17.013 13.327 17.356 12.823 17.713C12.105 18.203 11.307 18.765 10.126 18.765H9.87198Z" fill="white"/>
</svg>




              <p className="text-white font-semibold text-[16px] ">Snapchat</p>
              </div>
              <div className="flex w-auto h-auto items-center justify-end mr-[30px]">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1332 1.13989C0.622268 1.65641 0.622268 2.49026 1.1332 3.00679L5.08382 7.00068L1.1332 10.9946C0.622268 11.5111 0.622268 12.3449 1.1332 12.8615C1.64562 13.3795 2.47511 13.3795 2.98753 12.8615L7.8668 7.92875C8.37773 7.41223 8.37773 6.57838 7.8668 6.06185L2.98753 1.12914C2.4841 0.620189 1.64397 0.623513 1.1332 1.13989Z" fill="#BBBBBB" stroke="#BBBBBB" stroke-width="0.5"/>
</svg>

                </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto gap-y-5 py-5 bg-neutral-800 mt-8">
            <a className="w-full h-auto flex text-green-500 items-center justify-center">
              <span className="text-[16px] font-semibold">Why CashApp</span>
            </a>
            <div className="w-[90%] h-[1px] bg-neutral-600 mx-auto"></div>
            <a className="w-full h-auto flex text-red-500 items-center justify-center">
              <span className="text-[16px] font-semibold">Kitty Party</span>
            </a>
          </div>

          <p className="text-neutral-400 text-center font-normal text-[14px] w-[90%] py-10">This is inspired heavily on Cash App's design. I claim no ownership lol.</p>
          
    </section>
  </main>
  </>
 )
}
