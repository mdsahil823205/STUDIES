import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
const navData = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "About",
    },
    {
        id: 3,
        name: "Services",
    },
    {
        id: 4,
        name: "Contact",
    },
    {
        id: 5,
        name: "gallery",
    },
];
const Navbar = () => {
    const [mobileview, setmobileview] = useState(false)
    console.log(mobileview)
    return (
        <div className="flex justify-between bg-[seagreen] items-center py-6 px-12">
            <h1 className="text-2xl capitalize text-[#f5e900] font-bold ">my app</h1>
            <div className=" max-[720px]:hidden flex gap-6 capitalize text-md ">
                {navData.map((elem, index) => (
                    <a
                        className="hover:underline hover:underline-offset-6"
                        href=""
                        key={index}
                    >
                        {elem.name}
                    </a>
                ))}
            </div>
            <div className="flex gap-3 text-xl items-center uppercase">
                <span>🛒</span>
                <span><MdOutlineLogin /></span>
                <GiHamburgerMenu className="min-[720px]:hidden" onClick={() => setmobileview(!mobileview)} />

            </div>

            {/* mobile view */}
            <div className={` min-[720px]:hidden flex gap-6 capitalize text-md bg-[#000000e6] flex-col absolute top-0 left-0 h-screen w-full max-w-100 ${mobileview ? "-translate-x-20 transition-all duration-200":"-translate-x-100 transition-all duration-200"} `}>
                <button onClick={() => setmobileview(false)} className=" absolute right-6 top-4">❌</button>
                <div className="flex flex-col mt-10 items-center w-full  ">{navData.map((elem, index) => (
                    <a
                        className="hover:underline hover:underline-offset-6 hover:bg-[#222121] w-full text-center p-10"
                        href=""
                        key={index}
                    >
                        {elem.name}
                    </a>
                ))}</div>
            </div>
        </div >
    );
};

export default Navbar;
