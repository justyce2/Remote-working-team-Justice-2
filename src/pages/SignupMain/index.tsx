import React from "react";



import { useNavigate } from "react-router-dom";
import AccountCard from "../../components/accountCard";
import RemoteLogoDot from "../../components/remoteLogoDot"

import CustomeBtn from "../../components/customeBtn";

const SignupMain = () => {
  const [selected, setSelected] = React.useState<string>("2");
  const navigate = useNavigate();

  function handleNext() {
    navigate("/bposignup2_6");
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
        <div className="absolute z-10 top-[28%] inset-x-0 px-[10%]">
          <RemoteLogoDot textStyle=" text-[30px]" />
          <h3
            style={{ fontFamily: "Arial" }}
            className="font-bold text-[46px]  text-white text-left"
          >
            Hire the staffs <br />
            your organization <br />
            needs
          </h3>
        </div>
      </div>
      <div className="basis-full px-[10%] pt-[8%] md:pt-[12%] overflow-y-auto ">
        <h3 className="text-[25px] md:text-[48px] tracking-normal text-[#111827]">
          Choose your account type
        </h3>
        <div className="mb-[74px] mt-[54px] grid md:grid-cols-3 gap-1 max-w-[924px]">
          <AccountCard
            onClick={() => setSelected("1")}
            selected={selected == "1" ? true : false}
            title="I’m a employer, hiring for a project"
          />
          <AccountCard
            onClick={() => setSelected("2")}
            selected={selected == "2" ? true : false}
            title="I’m a BPO, managing candidates"
          />
          <AccountCard
            onClick={() => setSelected("3")}
            selected={selected == "3" ? true : false}
            title="I’m a candidate, looking for work"
          />
        </div>
        <CustomeBtn onClick={handleNext}
          btnStyle={{ paddingRight: "48px", paddingLeft: "48px" }}
          title="Sign up as a BPO"
        />
        <div className="mt-[28px]">
          <p
            className="inline-block text-[16px] font-[#010101]"
            style={{ fontFamily: "Arial" }}
          >
            Already have an account?
          </p>{" "}
          <p
            className="inline-block text-[#155357] underline"
            style={{ fontFamily: "Arial" }}
          >
            Sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupMain;
