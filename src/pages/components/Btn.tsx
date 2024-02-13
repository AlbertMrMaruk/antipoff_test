import { ReactNode } from "react";

type BtnProps = {
  value: string;
  onClickFunc: () => void;
  side: "left" | "right";
  icon: ReactNode;
};

const Btn = ({ value, onClickFunc, side, icon }: BtnProps) => {
  return (
    <>
      <div
        className={`absolute top-8 ${
          side === "left" ? "left-[80px]" : "right-[80px]"
        }  bg-transparent rounded-lg w-[80px]  py-1 px-4 text-white border cursor-pointer border-white hidden md:block`}
        onClick={onClickFunc}
      >
        {value}
      </div>
      <div
        className={`absolute top-6 cursor-pointer ${
          side === "left" ? "left-[16px]" : "right-[16px]"
        }  bg-transparent rounded-lg w-[40px] h-[40px] py-1 px-2 text-white  block md:hidden`}
        onClick={onClickFunc}
      >
        {icon}
      </div>
    </>
  );
};

export default Btn;
