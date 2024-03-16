import React from "react";
import { FaAngleDown, FaBriefcase, FaMagnifyingGlass } from "react-icons/fa6";

const FindWorkSearch = () => {
  return (
    <form className="h-[50px] flex items-center mb-[45px] relative">
      <input
        type="text"
        name="find a job"
        tabIndex={0}
        aria-label="Search for a service"
        className="h-full rounded-l-[25px] w-[545px] bg-white px-[27px] text-lg font-normal"
        placeholder="Search for a service..."
      />
      <div className="w-[224px] bg-black h-full text-white rounded-r-[25px] pl-[20px] pr-[27px] flex items-center text-sm cursor-pointer">
        <p>
          <FaBriefcase />
        </p>
        <h1 className="text-base ml-[14px]">Find work</h1>
        <p className="ml-auto">
          <FaAngleDown className="opacity-70" />
        </p>
      </div>
      <div className="absolute hidden bg-white top-[60px] right-[224px] overflow-y-auto space-y-[20px] px-[37px] pt-[33px] h-[260px] rounded-t-[8px] w-[520px]">
        <section className="flex items-center gap-x-[15px] z-10 text-dull-green cursor-pointer">
          <p className="font-light">
            <FaMagnifyingGlass />
          </p>
          <p className="font-semibold">Digital Marketing</p>
        </section>
      </div>
    </form>
  );
};

export default FindWorkSearch;
