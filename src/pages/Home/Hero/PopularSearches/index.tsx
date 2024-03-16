import React from "react";

const PopularSearches = () => {
  return (
    <div className="flex items-center gap-x-[17px] text-white">
      <p>Popular searches:</p>
      <div className="w-[171px] h-[32px] border rounded-full border-white flex items-center justify-center">
        <span> Software Engineer </span>
      </div>
     <div
      className="min-w-[171px] px-5 h-[32px] border rounded-full border-white flex items-center justify-center"
              >
                <span> System Administrator </span>
              </div>
    </div>
  );
};

export default PopularSearches;
