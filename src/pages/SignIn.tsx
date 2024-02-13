import React, { useEffect, useState } from "react";
import Field from "./components/Field";
import BtnSubmit from "./components/BtnSubmit";
import {
  validateName,
  validatePassword,
  validateType,
  validateObjectType,
} from "../utils/validate";
import { Link, useNavigate } from "react-router-dom";
import { SignInData, SignInResponse } from "../api/UsersAPI.types";
import UsersAPI from "../api/UsersAPI";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignInData>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<validateObjectType>({
    email: false,
    password: false,
  });
  const { email, password } = formData;
  const setError = (key: string, newError: validateType) => {
    setFormErrors((prev) => ({ ...prev, [key]: newError }));
  };
  const setValue = (key: string, newValue: string) => {
    setFormData((prev) => ({ ...prev, [key]: newValue }));
  };
  const handleSubmit = () => {
    //TODO:Валидация данных
    const passwordError = validatePassword(formData.password);
    const emailError = validateName(formData.email);
    setError("password", passwordError);
    setError("email", emailError);

    //TODO:Отправка запроса для токена
    if (!passwordError && !emailError) {
      //Замена почты на существующую для корректной работы API

      UsersAPI.signInUser({ ...formData, email: "eve.holt@reqres.in" })
        .then((el: Response) => el.json())
        .then((resp: SignInResponse) => {
          if ("token" in resp) {
            document.cookie = `token=${resp.token}`;
            navigate("/");
          }
        });
    }
  };
  return (
    <div className="w-[100%] h-[100%]">
      <div className=" flex flex-col m-auto md:w-[500px] rounded-2xl p-[16px] shadow-main mt-[200px] gap-6">
        <h3 className="text-xl leading-6">Войти</h3>
        <form>
          <Field
            placeholder={"eve.holt@reqres.in"}
            label={"Почта"}
            errorMessage={formErrors.email}
            id="email"
            type="email"
            value={email}
            onChangeFunc={(e) => setValue("email", e.target.value)}
          />
          <Field
            onChangeFunc={(e) => setValue("password", e.target.value)}
            value={password}
            errorMessage={formErrors.password}
            placeholder={"****"}
            label={"Пароль"}
            id="password"
            type="password"
          />
          <BtnSubmit onClickFunc={handleSubmit} value={"Войти"} />
        </form>
      </div>
      <div className="mt-2 text-center text-sm">
        Если у вас нет аккаунта можете
        <Link to="/sign-up" className="ml-1 text-gray-600 cursor-pointer">
          зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
