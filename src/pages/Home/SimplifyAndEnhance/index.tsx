import React from "react";
import "./index.css";

const SimplifyAndEnhance = () => {
  return (
    <section className="mt-[25px] simplifyE__container">
      <div className="w-[611px]">
        <h1 className="text-[24px] font-code w-[591px] leading-[66px]  sm:text-[28px] xl:text-[48px] text-dark-green mb-7">
          Simplify and enhance the recruitment process for employers seeking
          African talent
        </h1>
        <p className="text-sm xl:text-lg leading-[27px] text-dull-green mb-12">
          Connecting Western businesses with skilled professionals in Africa,
          ensuring a smooth and efficient hiring process. Join us to optimize
          your talent acquisition strategy and unlock the potential of the
          African workforce.
        </p>
        <div className="flex items-center gap-x-[74px]">
          <button className="w-[136px] h-[44px] rounded-[25px] navbar-btn font-semibold text-white">
            Get started
          </button>
          <p className="underline text-light-green font-bold cursor-pointer">
            Find job Candidates
          </p>
        </div>
      </div>
      <img
        loading="lazy"
         src="https://res.cloudinary.com/dpwwyxsj2/image/upload/v1710138770/gpmouanljebzbhqzarlp.jpg"
            alt=""
        className="h-full w-[738px] block rounded-[14px]"
      />
    </section>
  );
};

export default SimplifyAndEnhance;
