import React from "react";

interface props {
  title: string;
  onChange?: () => void;
  type?: string;
  placeholder?: string;
  checked?: boolean | undefined;
  value?: string | number | readonly string[] | undefined;
}

const CustomCheck: React.FC<props> = ({
  title = "",
  onChange = () => {},
  type = "text",
  checked = false,
  value,
}) => {
  return (
    <div style={{ height: "30px" }} className="flex flex-row items-center">
      <input
        style={{ width: "30px", height: "30px" }}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        value={value}
      ></input>
      <label
        className="text-[12px] md:text-[16px] font-[#010101] ml-[17px]"
        style={{ fontFamily: "Arial" }}
      >
        {title}:
      </label>
    </div>
  );
};

export default CustomCheck;
