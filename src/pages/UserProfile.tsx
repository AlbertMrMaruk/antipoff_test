// import React from "react";
// import { UserType } from "../api/UsersAPI.types";

// type UserProfileType = {
//   user: UserType;
// };
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";
import UsersAPI from "../api/UsersAPI";
import { SingleUserResponse } from "../api/UsersAPI.types";
import { setCurrentUser } from "../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProfileHeader from "./components/ProfileHeader";
import IconField from "./components/IconField";
import { FaInbox, FaPhone } from "react-icons/fa";
const UserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  useEffect(() => {
    if (id) {
      UsersAPI.getUser(Number(id))
        .then((el) => el.json())
        .then((resp: SingleUserResponse) => {
          dispatch(setCurrentUser(resp.data));
        });
    }
  }, []);
  return (
    <main className="w-[100%] h-[100%]">
      {currentUser && (
        <>
          <ProfileHeader />
          <div className="flex flex-col-reverse md:flex-row md:gap-16 gap-8 justify-center items-start  md:px-[188px] px-[16px] py-[45px]">
            <p className="text-md text-black ">
              Клиенты видят в нем эксперта по вопросам разработки комплексных
              решений финансовых продуктов, включая такие аспекты, как
              организационная структура, процессы, аналитика и ИТ-компоненты. Он
              помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и
              увеличивать продажи, используя самые современные аналитические
              инструменты. <br /> В работе с клиентами недостаточно просто
              решить конкретную проблему или помочь справиться с трудностями. Не
              менее важно уделять внимание обмену знаниями: "Один из самых
              позитивных моментов — это осознание того, что ты помог клиенту
              перейти на совершенно новый уровень компетентности, уверенность в
              том, что после окончания проекта у клиента есть все необходимое,
              чтобы дальше развиваться самостоятельно". <br /> Помимо
              разнообразных проектов для клиентов финансового сектора, Сорин
              ведет активную предпринимательскую деятельность. Он является
              совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов.
            </p>
            <div className="flex flex-col  gap-6 md:gap-4 items-start">
              <IconField
                icon={<FaPhone className="w-[24px] h-[24px] text-[#512689]" />}
                value={"+7 (954) 333-44-55"}
              />
              <IconField
                icon={<FaInbox className="w-[24px] h-[24px] text-[#512689]" />}
                value={currentUser.email}
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default UserProfile;
