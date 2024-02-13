import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UsersAPI from "../../api/UsersAPI";
import { addUsers } from "../../store/reducers/userSlice";
import { UserListResponse } from "../../api/UsersAPI.types";
const BtnLoadMore = () => {
  const currentPage = useSelector((state: RootState) => state.user.currentPage);
  const totalPages = useSelector((state: RootState) => state.user.totalPages);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    UsersAPI.getUsers(currentPage + 1)
      .then((el) => el.json())
      .then((resp: UserListResponse) => {
        dispatch(addUsers(resp.data));
      });
  };
  return (
    <div
      className={`bg-transparent rounded-lg w-[170px]  py-2 px-4 text-[#151317] border cursor-pointer border-[#151317] flex justify-center items-center mx-auto mb-6 ${
        currentPage === totalPages && "hidden"
      }`}
      onClick={handleLoadMore}
    >
      Показать еще
      <FaChevronDown className="text-lg ml-3 mt-1" />
    </div>
  );
};

export default BtnLoadMore;
