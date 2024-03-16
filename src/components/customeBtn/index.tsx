import React from "react";

const CustomeBtn: React.FC<{
  title?: string;
  btnStyle?: object;
  onClick?: () => void;
}> = ({ title = "", btnStyle, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="h-[50px] bg-gradient-to-r from-[#161818] to-[#155357] rounded-3xl text-[14px] text-white p-[15px]"
      style={{ ...btnStyle }}
    >
      {title}
    </button>
  );
};

export default CustomeBtn;
