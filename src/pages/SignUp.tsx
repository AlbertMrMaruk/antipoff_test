import Field from "./components/Field";
import BtnSubmit from "./components/BtnSubmit";
import { useState } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateRePassword,
  validateType,
  validateObjectType,
} from "../utils/validate";
import { Link, useNavigate } from "react-router-dom";
import { SignUpData, SignUpResponse } from "../api/UsersAPI.types";
import UsersAPI from "../api/UsersAPI";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [formErrors, setFormErrors] = useState<validateObjectType>({
    name: false,
    email: false,
    password: false,
    repassword: false,
  });
  const { name, password, repassword, email } = formData;
  const setValue = (key: string, newValue: string) => {
    setFormData((prev) => ({ ...prev, [key]: newValue }));
  };
  const setError = (key: string, newError: validateType) => {
    setFormErrors((prev) => ({ ...prev, [key]: newError }));
  };
  const handleSubmit = () => {
    //TODO:Валидация данных
    const passwordError = validatePassword(formData.password);
    const repasswordError = validateRePassword(
      formData.password,
      formData.repassword
    );
    const emailError = validateEmail(formData.email);
    const nameError = validateName(formData.name);
    setError("password", passwordError);
    setError("repassword", repasswordError);
    setError("email", emailError);
    setError("name", nameError);

    //TODO:Отправка запроса для токена
    if (!passwordError && !repasswordError && !emailError && !nameError) {
      //Замена почты на существующую для корректной работы API
      UsersAPI.signUpUser({ ...formData, email: "eve.holt@reqres.in" })
        .then((el: Response) => el.json())
        .then((resp: SignUpResponse) => {
          if ("token" in resp) {
            navigate("/sign-in");
          }
        });
    }
  };
  return (
    <div className="w-[100%] h-[100%]">
      <div className=" flex flex-col m-auto md:w-[500px] rounded-[16px] p-[16px] shadow-main mt-[100px] gap-6">
        <h3 className="text-xl leading-6">Регистрация</h3>
        <form>
          <Field
            placeholder={"Альберт"}
            label={"Имя"}
            id="name"
            errorMessage={formErrors.name}
            type="text"
            value={name}
            onChangeFunc={(e) => setValue("name", e.target.value)}
          />
          <Field
            placeholder={"example@mail.ru"}
            label={"Электронная почта"}
            errorMessage={formErrors.email}
            id="email"
            type="email"
            value={email}
            onChangeFunc={(e) => setValue("email", e.target.value)}
          />
          <Field
            onChangeFunc={(e) => setValue("password", e.target.value)}
            errorMessage={formErrors.password}
            value={password}
            placeholder={"****"}
            label={"Пароль"}
            id="password"
            type="password"
          />
          <Field
            onChangeFunc={(e) => setValue("repassword", e.target.value)}
            value={repassword}
            errorMessage={formErrors.repassword}
            placeholder={"****"}
            label={"Подтвердите пароль"}
            id="repassword"
            type="password"
          />
          <BtnSubmit onClickFunc={handleSubmit} value={"Зарегистрироваться"} />
        </form>
      </div>
      <div className="mt-2 text-center text-sm">
        Если у вас уже есть аккаунт можете
        <Link to="/sign-in" className="ml-1 text-gray-600 cursor-pointer">
          войти
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
