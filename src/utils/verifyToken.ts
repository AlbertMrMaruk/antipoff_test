export const verifyToken = (): string | undefined => {
  const cookies = document.cookie.split(";");
  return cookies.find((cookie) => cookie.split("=")[0] === "token");
};
