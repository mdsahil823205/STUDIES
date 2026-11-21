import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const Card = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100 grid grid-cols-3 gap-2">
      <div className="h-[480px] w-[400px] bg-white rounded-2xl shadow-2xl ring-2 ring-gray-200 overflow-hidden flex flex-col">
        {/* Top Banner Section */}
        <div className="h-[28%] bg-red-300 relative flex justify-center">
          {/* Profile Picture Circle: Centered horizontally and overlapping the bottom edge */}
          <div className="bg-white h-36 w-36 rounded-full absolute -bottom-18 border-4 border-red-300 shadow-md flex items-center justify-center overflow-hidden">
            <img className=" h-full w-full object-cover" src="https://images.unsplash.com/photo-1793976665839-1874b7353363?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="h-[72%] bg-red-900 text-white pt-20 px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl capitalize font-semibold">codinglab</h3>
            <p className="text-lg capitalize text-red-200">youtuber & blogger</p>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-xl"
            >
              <GrInstagram />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-xl"
            >
              <FaTwitter />
            </a>
             <a
              href="#instagram"
              aria-label="Instagram"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-xl"
            >
             <FaFacebook />
            </a>
             <a
              href="#instagram"
              aria-label="Instagram"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-xl"
            >
              <FaYoutube />
            </a>
          </div>
           <div className=" w-full flex gap-5 justify-center mt-4">
            <button className="bg-blue-500 rounded-4xl px-8 py-3 font-semibold capitalize">subscribe</button>
            <button className="bg-blue-500 rounded-4xl px-8 py-3 font-semibold capitalize">mesaage</button>
           </div>
           <div className="flex gap-5 mt-4">
           <p className="flex items-center gap-1.5"> <span><CiHeart /></span > 60.4k <span className="ml-3">|</span></p>
           <p className="flex items-center gap-1.5"> <span><CiHeart /></span > 60.4k <span className="ml-3">|</span></p>
           <p className="flex items-center gap-1.5"> <span><CiHeart /></span > 60.4k</p>

           
           </div>
        </div>
      </div>
    </div>
  );
};

export default Card;