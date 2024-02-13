import React, { ReactNode } from "react";

type IconFieldType = {
  icon: ReactNode;
  value: string;
};

const IconField = ({ icon, value }: IconFieldType) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      {icon}
      <span>{value}</span>
    </div>
  );
};

export default IconField;
