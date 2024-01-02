import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";
import logo from "../assets/logo/logo.png"

const Navbar : React.FC = () => {
  return (
    <div className="h-14 bg-black flex justify-between ">
      <div className="text-white flex">
        <GiHamburgerMenu className="w-20 h-6" />
        <img className="w-20 h-6" src={logo} alt="loog" />
      </div>
      <div className='flex'>
        <input type="text" className="w-20 h-6" />
     <FaMicrophone className="w-20 h-6 text-white" />
      </div>
     <div className="flex items-center space-x-4">
  <MdVideoCall className="text-white" />
  <FaRegBell className="text-white"/>
  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-500">
    <img className="w-full h-full object-cover" src={logo} alt="" />
  </div>
</div>
    </div>
  );
}

export default Navbar;
