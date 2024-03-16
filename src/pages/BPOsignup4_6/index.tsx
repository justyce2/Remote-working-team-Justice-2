import React from 'react'

import { useNavigate } from "react-router-dom";
import RemoteLogoDot from '../../components/remoteLogoDot';
import CustomSelect from '../../components/customeSelect';
import CustomInput from '../../components/customInput';
import CustomeBtn from '../../components/customeBtn';

const BPOsignup4_6 = () => {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/bposignup5_6");
  }
  return (
    <div className="pb-[25px] flex flex-row min-h-screen bg-white h-[100vh] overflow-hidden">
      <div className=" hidden md:block w-[45%] bg-white relative">
        <img
          style={{ objectFit: "cover" }}
          className="h-[100vh] w-[100%]"
          alt="img"
          src="/left-img1.png"
        />
        <div className="top-[45%] absolute z-10 inset-x-0 px-[10%] ">
          <RemoteLogoDot />
        </div>
      </div>
      <div className="basis-full px-[10%] pt-[6%] overflow-y-auto">
        <div className="mb-[4px]">
          <p
            className="inline-block text-[14px] font-[#010101]"
            style={{ fontFamily: "Arial" }}
          >
            Step 3 of 3
          </p>
        </div>

        <h3 className="mt-[7px] text-[30px] tracking-normal text-[#111827]">
          Candidate preference
        </h3>

        <form  onSubmit={handleNext} className="mb-[74px] mt-[46px] max-w-[728px]">
          <div className="mt-[26px]">
            <CustomSelect
              options={[
                { name: "-", value: "-" },
                { name: "Hign School", value: "High School" },
                { name: "Graduate School", value: "Graduate School" },
              ]}
              title="Preferred job type"
            />
          </div>
          <div className="mt-[26px]">
            <CustomInput
              placeholder="Study field"
              title="Desired position/role"
            />
          </div>
          <div className="mt-[26px]">
            <CustomInput
              placeholder="Harvard University"
              title="Preferred Industries"
            />
          </div>
          <div className="mt-[26px]">
            <CustomSelect
              options={[
                { name: "-", value: "-" },
                { name: "Hign School", value: "High School" },
                { name: "Graduate School", value: "Graduate School" },
              ]}
              title="Career level"
            />
          </div>
          <div className="mt-[26px]">
            <CustomSelect
              options={[
                { name: "-", value: "-" },
                { name: "Actively looking", value: "Actively looking" },
                { name: "Not looking", value: "Not Looking" },
              ]}
              title="Job search status"
            />
          </div>

          <div className="mt-[28px] float-end flex flex-col">
            <CustomeBtn
              btnStyle={{ paddingRight: "48px", paddingLeft: "48px" }}
              title="Continue"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BPOsignup4_6;
