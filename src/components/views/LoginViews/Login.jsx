"use client";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../../Redux/Action/LoginAction";
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(LoginAction(loginData, signIn, navigate));
  };

  return (
    <div className="flex justify-center py-20 bg-[red]s">
      <div className="bg-[tomatos] p-10 border-2 rounded-md w-11/12 h-4/5 sm:w-4/5 sm:h-2/5 lg:w-2/5">
        <h1 className="font-bold text-4xl mb-14 text-gray-800 text-center">
          LOGIN
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="bg-[tomato]s text-lg font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Masukan Email Anda"
              className="placeholder:text-sm px-4 py-2 rounded-md ring-2  ring-fuchsia-500 border-none focus:ring-fuchsia-600 focus:outline-none focus:ring-2  text-md"
              required
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="password"
              className="bg-[tomato]s text-lg font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Masukan Password Anda"
              className="placeholder:text-sm block w-full px-4 py-2 rounded-md ring-2 ring-fuchsia-500  border-none focus:ring-fuchsia-600 focus:outline-none focus:ring-2 text-md"
              required
            />

            <div
              className="cursor-pointer absolute inset-y-0 right-5 top-8 flex items-center pl-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="text-gray-500 sm:text-lg">
                {showPassword ? <IoEye /> : <IoMdEyeOff />}
              </span>
            </div>
          </div>
          <div className="mt-14">
            <button
              type="submit"
              className="bg-fuchsia-600 text-white font-medium py-2 w-full rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-sm text-center mt-5">
          Jika anda lupa password, silahkan hubungi pengembang untuk merubah
          password.
        </p>
      </div>
    </div>
  );
};

export default Login;
