import Btn from "./Btn";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../utils/logOut";

const Header = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/sign-in");
  };
  return (
    <header
      className={`py-[64px]
     bg-[#512689] text-white text-center px-4  flex  items-start`}
    >
      <div className="mx-auto md:w-[846px] px-3 w-[100%]">
        <h1 className="text-[36px] md:text-[64px] leading-[42.19px] md:leading-[75px]">
          Наша команда
        </h1>
        <h2 className="text-[16px] md:text-[20px] leading-[18.75px] md:leading-[23.44px] mt-4">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </h2>
      </div>
      <Btn
        value="Выход"
        onClickFunc={handleLogOut}
        side="right"
        icon={<FaRegArrowAltCircleRight className="text-[24px]" />}
      />
    </header>
  );
};

export default Header;
