import React from 'react'
import CustomeBtn from '../../components/customeBtn';
import NavBar from '../../components/navbar';

const BPOsignup5_6 = () => {
  return (
    <div className=" max-w-[1920px] mx-auto  min-h-[100px] pb-[20px]">
      <NavBar />
      <div className=" pt-[10%] w-full px-[10px] md:px-[10%] ">
        <div className="flex flex-col items-center w-full ">
          <i
            className="fa fa-envelope-o text-[111px] opacity-5"
            aria-hidden="true"
          ></i>
          <h3 className="mt-[40px] text-[30px] tracking-normal text-[#111827]">
            Please verify your email
          </h3>
          <div className=" mt-[28px] text-center">
            <span>
              <h5
                className="inline-block text-[16px] font-[#111827)] leading-8"
                style={{ fontFamily: "Arial" }}
              >
                We sent an email to :
              </h5>
              <h5
                className="italic inline-block text-[16px] font-[#010101] leading-8 pl-[10px]"
                style={{ fontFamily: "Georgia" ,fontWeight:"bold"}}
              >
                address@mail.com
              </h5>
            </span>
          </div>
          <div className="text-center">
            <h5
              className="inline-block text-[16px] font-[#111827)] leading-8"
              style={{ fontFamily: "Arial" }}
            >
              please check your inbox and follow the links. For your safety,
              <br />
              we may also need to verify your phone number.
            </h5>
          </div>
          <div className="mt-[40px]">
            <CustomeBtn btnStyle={{paddingRight:"30px",paddingLeft:"30px"}} title="Send again" />
          </div>
          <p
            className="inline-block text-[#155357] underline text-center mt-[52px]"
            style={{ fontFamily: "Arial" }}
          >
          Didn't receive email?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BPOsignup5_6;
