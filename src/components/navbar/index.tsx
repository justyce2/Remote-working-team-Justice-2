import React from "react";
import RemoteLogoDot from "../remoteLogoDot";


const NavBar = () => {
  return (
    <nav className="px-[10px] md:px-[10%] h-[93px] flex flex-row items-center justify-between">
      <ul className="flex flex-row items-center">
        <li className="mr-[39px]">
          <RemoteLogoDot isDark />
        </li>
        <li className="hidden md:block mr-[46px] text-[#111827] text-[16px]">
          Find work <i className="fa fa-angle-down" aria-hidden="true"></i>
        </li>
        <li className="hidden md:block mr-[46px] text-[#111827] text-[16px]">Hire staff</li>
        <li className="hidden md:block mr-[46px] text-[#111827] text-[16px]">Manage staff</li>
        <li className="hidden md:block mr-[46px] text-[#111827] text-[16px]">
          About <i className="fa fa-angle-down" aria-hidden="true"></i>
        </li>
      </ul>
      <div>
        <ul className="flex flex-row items-center">
          <li className="hidden md:block mr-[25px] flex flex-row items-center">
            <i
              className=" text-[32px] fa fa-globe mr-[10px]"
              aria-hidden="true"
            ></i>{" "}
            <p
              className="inline-block text-[16px] font-[#010101]"
              style={{ fontFamily: "Arial" }}
            >
              EN
            </p>
          </li>
          <li className="hidden md:block mr-[18px]">
            <p
              className="inline-block text-[16px] font-[#010101]"
              style={{ fontFamily: "Arial" }}
            >
              Help
            </p>
          </li>
          <li className="hidden md:block mr-[18px]">
            <i className="fa fa-bell-o  text-[32px]" aria-hidden="true"></i>
          </li>
          <li className="mr-[10px] md:mr-[25px]">
            <i className="fa fa-heart-o text-[32px]" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-user-circle-o text-[32px]" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
