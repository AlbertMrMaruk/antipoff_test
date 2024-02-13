import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { validateType } from "../../utils/validate";

type FieldProps = {
  label: string;
  placeholder: string;
  id: string;
  type: HTMLInputTypeAttribute;
  onChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMessage: validateType;
};

const Field = ({
  label,
  placeholder,
  type,
  id,
  onChangeFunc,
  value,
  errorMessage,
}: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-3 mb-3">
      <label htmlFor={id} className="leading-5">
        {label}
      </label>
      <div className="w-[100%] flex  items-center  ">
        {type === "password" ? (
          <>
            <input
              className={`bg-[#F8F8F8] ${
                errorMessage && "border-2 border-r-0 border-[#FF6161]"
              }  placeholder:text-[#808185] py-3 pr-2 pl-4 focus:outline-none ${
                type === "password"
                  ? "rounded-l-lg w-[90%]"
                  : "rounded-lg w-[100%]"
              }`}
              value={value}
              onChange={onChangeFunc}
              placeholder={placeholder}
              type={showPassword ? "text" : type}
              id={id}
              autoComplete="on"
            />
            <div
              className={`bg-[#F8F8F8] w-[10%] py-3 pl-2.5 ${
                errorMessage && "border-2 border-l-0 border-[#FF6161]"
              } rounded-r-lg`}
            >
              {showPassword ? (
                <FaEyeSlash
                  className="w-[24px] h-[24px] text-[#808185] "
                  onClick={toggleShowPassword}
                />
              ) : (
                <FaEye
                  className="w-[24px] h-[24px] text-[#808185] bg-[#F8F8F8]"
                  onClick={toggleShowPassword}
                />
              )}
            </div>
          </>
        ) : (
          <input
            className={`bg-[#F8F8F8] ${
              errorMessage && "border-2 border-[#FF6161]"
            }  placeholder:text-[#808185] py-3 pr-2 pl-4 focus:outline-none rounded-lg w-[100%]
         `}
            value={value}
            onChange={onChangeFunc}
            placeholder={placeholder}
            type={type}
            id={id}
          />
        )}
      </div>
      {errorMessage && (
        <div className="text-[#FF6161] -mt-2 text-sm ml-1">{errorMessage}</div>
      )}
    </div>
  );
};

export default Field;
