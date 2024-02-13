import Btn from "./Btn";
import { FaChevronLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../utils/logOut";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// import { getBase64 } from "../../utils/getBase64";
import UsersAPI from "../../api/UsersAPI";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const handleLogOut = () => {
    logOut();
    navigate("/sign-in");
  };
  const handleChange = () => {
    //TODO: Получение Base64 кодировки изображения и отправки его в ручку API, которая публикует изображение на сервере и меняет данные у пользователя
    //getBase64(e.target.files[0]);
    if (currentUser) {
      //Заглушка
      UsersAPI.updateUser(currentUser.id, {
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      });
    }
  };
  return (
    <header
      className="py-[64px] md:py-[40px]
       bg-[#512689] text-white text-center px-4  flex  items-start"
    >
      <Btn
        value="Назад"
        onClickFunc={() => navigate("/")}
        side="left"
        icon={<FaChevronLeft className="text-[24px]" />}
      />

      <div className="mx-auto md:ml-[188px] px-3  flex flex-col-reverse justify-center  items-center md:flex-row">
        <input
          type="file"
          className="w-[187px] h-[187px] opacity-0 absolute left-[188px] cursor-pointer"
          onChange={handleChange}
        />
        <img
          src={currentUser?.avatar}
          alt={currentUser?.first_name}
          className="w-[187px] h-[187px] rounded-full cursor-pointer"
        />
        <div className="flex flex-col mb-5 gap-2 md:gap-0   md:ml-[32px] md:mb-0 text-center md:text-left justify-center md:items-start items-center ">
          <h1 className="text-[42px] md:text-[64px]">
            {currentUser?.first_name + " " + currentUser?.last_name}
          </h1>
          <h3 className="text-[24px]  md:text-[32px]">Партнер</h3>
        </div>
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

export default ProfileHeader;
