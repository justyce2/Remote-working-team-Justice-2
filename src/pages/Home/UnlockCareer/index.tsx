import React from "react";

const UnlockCareer = () => {
  return (
    <section className="mt-[145px] mb-[200px] useCase">
      <div>
        <img
          loading="lazy"
            src="https://res.cloudinary.com/dpwwyxsj2/image/upload/v1710138954/bq6gct14mvyed1kpuosi.jpg"
            alt=""
            className="h-full w-[738px] block rounded-[14px]"
        />
        <section className="w-[611px]">
          <h1 className="text-[24px] font-code w-[507px] leading-[66px] sm:text-[28px] xl:text-[48px] text-dark-green mb-7">
            Unlock Your Career Potential – Find Your Dream Job in Africa
          </h1>
          <p className="text-sm xl:text-lg leading-[27px] text-dull-green mb-12">
            Explore exciting job opportunities that align with your skills and
            aspirations. We're dedicated to empowering African talents and
            connecting them with growth-oriented organizations in the West.
          </p>
          <div className="flex items-center gap-x-[74px]">
            <button className="w-[136px] h-[44px] rounded-[25px] navbar-btn font-semibold text-white">
              Get started
            </button>
            <p className="underline text-light-green font-bold cursor-pointer">
              Explore International Career Opportunities
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default UnlockCareer;
