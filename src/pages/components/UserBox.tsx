import { UserType } from "../../api/UsersAPI.types";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleLikeUser } from "../../store/reducers/userSlice";
type UserBoxType = {
  user: UserType;
};

const UserBox = ({ user }: UserBoxType) => {
  const likedUsers = useSelector((state: RootState) => state.user.likedUsers);
  const dispatch = useDispatch();
  const isLiked = likedUsers.includes(user.id);
  const navigate = useNavigate();
  const handleClick = () => navigate(`/user/${user.id}`);
  const handleLikeClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(toggleLikeUser(user.id));
  };
  return (
    <div
      className="pt-[36px] px-[20px] pb-[20px] flex flex-col gap-[16px] text-center items-center justify-center shadow-box rounded-2xl cursor-pointer hover:border hover:border-black transition-all "
      onClick={handleClick}
    >
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-[124px] h-[124px] rounded-full"
      />
      <h2 className="text-[20px] leading-[24px]">
        {user.first_name + " " + user.last_name}
      </h2>
      <div
        className="bg-[#F8F8F8] self-end rounded-md py-2 px-2 items-end "
        onClick={handleLikeClick}
      >
        <FaHeart className={`w-[14px]  ${isLiked ? "text-[#512689]" : ""}`} />
      </div>
    </div>
  );
};

export default UserBox;
