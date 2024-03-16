import React from "react";

interface props {
  title:string
  onChange?:() =>void,
  type?:string,
  placeholder?:string
}

const CustomInput :React.FC<props> = ({
  title = "",
  onChange = () => {},
  type = "text",
  placeholder = "",
}) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-[14px] md:text-[16px] font-[#010101]"
        style={{ fontFamily: "Arial" }}
      >
        {title}:
      </label>

      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="mt-[8px] md:mt-[10px]  h-[43px] md:h-[58px] bg-red rounded-md border border-[#A0C4C0BF] border-solid px-[10px]"
      />
    </div>
  );
};

export default CustomInput;
