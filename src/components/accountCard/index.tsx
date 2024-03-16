import React from "react";


interface props{
title:string
selected :boolean
onClick:()=>void
}

const AccountCard: React.FC<props> = ({
  title = "",
  selected = false,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={` cursor-pointer flex flex-col  border border-solid border-[#a0c4c0] rounded-lg sm:w-[30vw] md:[180px] xl:w-[94%] lg:w-[200px] h-[182px] p-6 ${
        selected ? "bg-[#A0C4C033]" : null
      }`}
    >
      <div className="flex flex-row justify-between">
        <i className="fa fa-user-md mt-3" aria-hidden="true"></i>
        <i className="fa fa-circle-thin" aria-hidden="true"></i>
      </div>

      <p className="mt-auto  text-[#131313] leading-7 tracking-normal text-[20px]">
        {title}
      </p>
    </div>
  );
};

export default AccountCard;
