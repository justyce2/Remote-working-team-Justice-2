import React from 'react'
import CustomeBtn from "../../components/customeBtn";







import { useNavigate } from "react-router-dom";
import CustomInput from '../../components/customInput';
import CustomSelect from '../../components/customeSelect';
import CustomCheck from '../../components/customCheck';
import RemoteLogoDot from '../../components/remoteLogoDot';

const BPOsignup2_6 = () => {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/bposignup3_6");
  }
  return (
    <div className=" flex flex-row min-h-screen bg-white h-[100vh] overflow-hidden pb-[25px]">
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
            Step 1 of 3
          </p>
        </div>

        <h3 className="mt-[7px] text-[30px] tracking-normal text-[#111827]">
          Find and manage staffs on remoting.work
        </h3>
        <div className="flex flex-row mt-[23px]">
          <div className="m-[4px] rounded-[50px] border border-slate-300 h-[50px] w-[50px] flex items-center justify-center">
            <i
              className="fa fa-google text-[30px] text-[#4285F4]"
              aria-hidden="true"
            ></i>
          </div>
          <div className="m-[4px] rounded-[50px] border border-slate-300 h-[50px] w-[50px] flex items-center justify-center">
            <i
              className="fa fa-facebook-official text-[30px] text-[#1877F2]"
              aria-hidden="true"
            ></i>
          </div>
          <div className="m-[4px] rounded-[50px] border border-slate-300 h-[50px] w-[50px] flex items-center justify-center">
            <i className="fa fa-apple text-[30px]" aria-hidden="true"></i>
          </div>
        </div>
        <div className=" mt-[16px] mb-[4px] flex flex-row items-center justify-between  max-w-[728px]">
          <div className="w-[45%] h-[1px] bg-[#A0C4C0BF]" />
          <p
            className="inline-block text-[14px] font-[#010101]"
            style={{ fontFamily: "Arial" }}
          >
         or
          </p>
          <div className="w-[45%] h-[1px]  bg-[#A0C4C0BF]" />
        </div>
        <form className="mb-[74px] mt-[22px] max-w-[728px]">
          <div className="flex flex-row justify-between">
            <div className="w-[48%]">
              <CustomInput placeholder="John" title="First name" />
            </div>
            <div className="w-[48%]">
              <CustomInput placeholder="Doe" title="Last name" />
            </div>
          </div>
          <div className="mt-[26px]">
            <CustomInput placeholder="name@mail.com" title="Email" />
          </div>
          <div className="mt-[26px]">
            <CustomInput
              placeholder="******"
              type="password"
              title="Password"
            />
          </div>
          <div className="mt-[26px]">
            <CustomSelect
              options={[
                { name: "Nigeria", value: "Nigeria" },
                { name: "Ghana", value: "Ghana" },
              ]}
              title="Country"
            />
          </div>
          <div className="mt-[22px] md:mt-[26px]">
            <CustomCheck title="Send me helpful emails to find rewarding work and job leads." />
          </div>
          <div className="mt-[26px]">
            <CustomCheck
              checked
              title="Yes, I understand and agree to the Remoting.work Terms of Service, including the User Agreement and Privacy Policy ."
            />
          </div>
          <div className="mt-[28px] float-end flex flex-col">
            <CustomeBtn
              onClick={handleNext}
              btnStyle={{ paddingRight: "48px", paddingLeft: "48px" }}
              title="Sign up as a BPO"
            />

            <div className="mt-[28px]">
              <p
                className="inline-block text-[16px] font-[#010101] mr-1"
                style={{ fontFamily: "Arial" }}
              >
                Already have an account?
              </p>
              <p
                className="inline-block text-[#155357] underline"
                style={{ fontFamily: "Arial" }}
              >
                Sign in
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BPOsignup2_6;
