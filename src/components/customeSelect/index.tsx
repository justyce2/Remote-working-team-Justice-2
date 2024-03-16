import React from "react";
interface props {
  title: string;
  onChange?: () => void;
  type?: string;
  placeholder?: string;
  options?: Array<{}>;
}

const CustomSelect: React.FC<props> = ({
  title = "",
  onChange = () => {},
  type = "text",
  options = [{ name: "a", value: "a" }],
}) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-[14px] md:text-[16px] font-[#010101]"
        style={{ fontFamily: "Arial" }}
      >
        {title}:
      </label>
      <div className="mt-[8px] md:mt-[10px] rounded-md border border-[#A0C4C0BF] border-solid px-[10px]">
        <select
          aria-placeholder=""
          onChange={onChange}
          className="  h-[43px] md:h-[58px]  w-full focus:outline-none "
        >
          {options.map((xx, index) => (
            <option key={index} value={xx.value}>
              {xx.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
