import React from "react";
import side from "../assets/logo.jpg";
import InputField from "./global/InputField";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col p-4 md:p-20">
        <p className="text-white text-2xl">Login Please</p>
        <InputField type="text" placeholder="email" />
        <InputField type="password" placeholder="password" />
        <button
          className="text-slate-900 text-lg bg-white p-3 mt-4 w-full rounded"
          type="submit"
        >
          Login
        </button>
        <p className="text-white mt-4 text-center">or sign in with</p>
        <div className="w-full flex justify-center items-center gap-4 mt-4">
          <a className="rounded-full bg-slate-900 shadow shadow-white" href="">
            <svg
              viewBox="0 0 1024 1024"
              fill="white"
              height="2.5em"
              width="2.5em"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
            </svg>
          </a>
          <a className="rounded-full bg-slate-900 shadow shadow-white" href="">
            <svg
              viewBox="0 0 512 512"
              fill="white"
              height="2.5em"
              width="2.5em"
            >
              <path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z" />
              <path d="M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-1/2 h-screen md:block hidden">
        <img src={side} className="w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default Login;
