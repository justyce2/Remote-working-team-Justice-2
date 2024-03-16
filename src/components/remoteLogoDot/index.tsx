import React from "react";

const RemoteLogoDot: React.FC<{ textStyle?: string; isDark?: Boolean }> = ({
  isDark,
  textStyle = "text-[36px]",
}) => {
  return (
    <span className="">
      <h3
        style={{ fontFamily: "Code-Pro-LC" }}
        className={`font-bold  text-[20px] md:${textStyle}  ${
          isDark ? "text-[#08282A]" : "text-white"
        } text-left inline-block`}
      >
        remoting
      </h3>
      <h3
        style={{ fontFamily: "Code-Pro-LC", lineHeight: "100%" }}
        className={`${
          isDark ? "text-white" : "text-[#08282A]"
        }  pt-[5px] ml-[5px] py-[0px] px-[10px] rounded-2xl font-bold  text-[20px] md:${textStyle}  ${
          isDark ? "bg-[#08282A]" : "bg-white"
        } text-[#161818] text-left inline-block`}
      >
        .work
      </h3>
    </span>
  );
};

export default RemoteLogoDot;
