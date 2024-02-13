import { useEffect } from "react";
import BtnLoadMore from "./components/BtnLoadMore";
import Header from "./components/Header";
import UserBox from "./components/UserBox";
import UsersAPI from "../api/UsersAPI";
import { UserListResponse } from "../api/UsersAPI.types";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList, setLikedUsers } from "../store/reducers/userSlice";
import { RootState } from "../store/store";

const UsersPage = () => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    //Получение данных о понравившихся пользователях
    dispatch(setLikedUsers());
    UsersAPI.getUsers()
      .then((el) => el.json())
      .then((resp: UserListResponse) => {
        dispatch(setUsersList(resp));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-[100%] h-[100%]">
      <Header />
      <div className="grid gap-5 grid-cols-1  lg:grid-cols-4 md:grid-cols-2  justify-center items-center  px-[20px] py-[45px]">
        {users.map((el, index: number) => (
          <UserBox key={index} user={el} />
        ))}
      </div>
      <BtnLoadMore />
    </main>
  );
};

export default UsersPage;
