import React from "react";
import FindWorkSearch from "./FindWorkSearch";
import PopularSearches from "./PopularSearches";

const Hero = () => {
  return (
    <section className="bg-light-green h-[100vh] w-[100%] overflow-hidden border border-border-grey">
      <div className="w-[1500px] mx-auto h-full flex items-center justify-between">
        <div>
          <h1 className="w-[773px] min-h-[280px] text-[58px] code-font text-white mb-[74px]">
            The first dedicated remote work marketplace for Western companies to
            hire African Talents
          </h1>

          <FindWorkSearch />
          <PopularSearches />
        </div>
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="hidden lg:block w-[611px] h-[788px] rounded-[16px]"
        />
      </div>
    </section>
  );
};

export default Hero;
