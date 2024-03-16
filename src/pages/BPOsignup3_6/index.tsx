import React from 'react'
import { useNavigate } from "react-router-dom";
;
import CustomSelect from '../../components/customeSelect';
import CustomeBtn from '../../components/customeBtn';
import RemoteLogoDot from '../../components/remoteLogoDot';
import CustomInput from '../../components/customInput';

const BPOsignup3_6 = () => {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/bposignup4_6");
  }
  return (
    <div className=" flex flex-row min-h-screen bg-white h-[100vh] overflow-hidden">
      <div className=" hidden md:block w-[45%] bg-white relative">
        <img
          style={{ objectFit: "cover" }}
          className="h-[100vh] w-[100%]"
          alt="img"
          src="/left-img1.png"
        />
       <div className="absolute z-10 top-[50%] inset-x-0 px-[10%]">
          <RemoteLogoDot textStyle="text-[30px]" />
        </div>
      </div>
      <div className="basis-full px-[10%] pt-[6%] overflow-y-auto">
        <div className="mb-[4px]">
          <p
            className="inline-block text-[14px] font-[#010101]"
            style={{ fontFamily: "Arial" }}
          >
            Step 2 of 3
          </p>
        </div>

        <h3 className="mt-[34px] text-[30px]  tracking-normal text-[#111827]">
          Company details
        </h3>
        <h5 className="mt-[7px] text-[20px] font-semibold text-[#111827]">
          Education
        </h5>

        <form className="mb-[74px] mt-[54px] max-w-[728px]">
          <div className="mt-[26px]">
            <CustomSelect
              options={[
                { name: "-", value: "-" },
                { name: "Hign School", value: "High School" },
                { name: "Graduate School", value: "Graduate School" },
              ]}
              title="Highest Education Level"
            />
          </div>
          <div className="mt-[26px]">
            <CustomInput placeholder="" title="Field of Study/Major" />
          </div>
          <div className="mt-[26px]">
            <CustomInput placeholder="" title="Institution Name" />
          </div>
          <div className="mt-[26px]">
            <CustomInput placeholder="" title="Year of Graduation" />
          </div>

          <div className="mt-[28px] float-end flex flex-col">
            <CustomeBtn onClick={handleNext}
              btnStyle={{ paddingRight: "48px", paddingLeft: "48px" }}
              title="Continue"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BPOsignup3_6;
