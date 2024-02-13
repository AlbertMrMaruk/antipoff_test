export const logOut = () => {
  document.cookie = "token=none; max-age=0";
};
