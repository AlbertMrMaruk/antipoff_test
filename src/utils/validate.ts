export type validateType = string | false;

export type validateObjectType = { [key: string]: validateType };

export const validatePassword = (password: string): validateType => {
  return password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/)
    ? false
    : "Пароль должен быть от 8 до 20 символов, содержать одну заглавную букву, одно число, один специальный символ";
};

export const validateRePassword = (
  password: string,
  repassword: string
): validateType => {
  return password === repassword
    ? false
    : "Пароли должны совпадать друг с другом ";
};

export const validateEmail = (email: string): validateType => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? false
    : "Введите корректный адрес электронной почты";
};

export const validateName = (name: string): validateType => {
  return name.match(/^([A-Za-z\-']{1,50})|([А-Яа-я\-']{1,50})$/)
    ? false
    : "Введите ваше имя на кириллице или латиннице ";
};
