import React from "react";

const AccessTopAfricanTalent = () => {
  return (
    <section className="mt-[145px] useCase space-y-[180px] mb-[200px]">
      <div>
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-[738px] block rounded-[14px]"
        />
        <section className="w-[611px]">
          <h1 className="text-[24px] font-code w-[461px] leading-[66px]  sm:text-[28px] xl:text-[48px] text-dark-green mb-7">
            Access Top African Talent for Your US Business
          </h1>
          <p className="text-sm xl:text-lg leading-[27px] text-dull-green mb-12">
            Whether you're looking to fill key positions or expand your team, we
            make the hiring process seamless. Join now to discover how
            connecting with African talents can elevate your business to new
            heights
          </p>
          <div className="flex items-center gap-x-[74px]">
            <button className="w-[136px] h-[44px] rounded-[25px] navbar-btn font-semibold text-white">
              Get started
            </button>
            <p className="underline text-light-green font-bold cursor-pointer">
              Find job opportunities
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AccessTopAfricanTalent;
