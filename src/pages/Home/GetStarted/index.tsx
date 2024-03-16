import React from "react";
import { FaArrowRight, FaUser } from "react-icons/fa6";
import "./index.css";

const GetStarted = () => {
  return (
    <section className="bg-lime-green py-[142px]">
      <div className="w-[1500px] mx-auto">
        <h1 className="code-font text-['Source Code Pro'] text-[48px] sm:text-[28px] text-[24px] text-dark-green mb-[50px]">
          Get started today
        </h1>
        <section className="flex gap-x-6 get-started">
          <div>
            <section className="flex items-center justify-between mb-[38px]">
              <p className="text-[26px]">
                <FaUser />
              </p>
              <p className="text-[20px]">
                <FaArrowRight />
              </p>
            </section>
            <h1 className="text-[32px] font-semibold">Join as Candidate</h1>
            <p className="text-[18px]">Click to get started</p>
          </div>
          <div>
            <section className="flex items-center justify-between mb-[38px]">
              <p className="text-[26px]">
                <FaUser />
              </p>
              <p className="text-[20px]">
                <FaArrowRight />
              </p>
            </section>
            <h1 className="text-[32px] font-semibold">Join as Employer</h1>
            <p className="text-[18px]">Click to get started</p>
          </div>
          <div>
            <section className="flex items-center justify-between mb-[38px]">
              <p className="text-[26px]">
                <FaUser />
              </p>
              <p className="text-[20px]">
                <FaArrowRight />
              </p>
            </section>
            <h1 className="text-[32px] font-semibold">Join as BPO</h1>
            <p className="text-[18px]">Click to get started</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GetStarted;
