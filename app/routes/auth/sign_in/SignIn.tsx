import React, { type ReactElement } from "react";
import type { Route } from "./+types/sign_in";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SignIn(): React.ReactElement {
  return (
    <div className="mx-auto w-2/3 pt-12 space-y-5">
      <div className="font-normal text-[#484848] text-[66.6px] tracking-[0] leading-[66.6px] whitespace-nowrap">
        FASCO
      </div>

      <div className="space-y-4">
        <div className=" top-0 left-0 [font-family:'Volkhov-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-10 whitespace-nowrap">
          Sign In To FASCO
        </div>

        <div className="flex gap-4">
          <div className=" w-[294px] h-[55px] flex items-center justify-center gap-2 bg-white rounded-lg border border-solid border-[#5b86e5]">
            <img
              className="w-9 h-9 top-[9px] left-[30px]  object-cover"
              alt="Image"
              src="./auth/icon_google.png"
            />
            <div className="left-[79px]  top-[7px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-base tracking-[1.28px] leading-10 whitespace-nowrap">
              Sign up with Google
            </div>
          </div>

          <div className=" w-[270px] h-[55px] flex items-center justify-center gap-2 bg-white rounded-lg border border-solid border-[#5b86e5]">
            <img
              className="w-[42px] h-[42px] top-1.5 left-5  object-cover"
              alt="Image"
              src="./auth/icon_mail.png"
            />
            <div className="left-[75px]  top-[7px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-base tracking-[1.28px] leading-10 whitespace-nowrap">
              Sign up with Email
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center font-bold text-[#828282] text-3xl tracking-[2.40px] leading-10 whitespace-nowrap">
          OR
        </div>
      </div>
      <div>
        <form
          action=""
          method="post"
          className="w-full flex flex-col gap-5 items-center"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="border-b w-full py-2"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="border-b w-full py-2"
          />
          <button
            type="submit"
            className="w-4/5 border border-black block py-1 rounded-md"
          >
            Sign In
          </button>
          <button className="w-4/5 border border-black block py-1 rounded-md">
            Register Now
          </button>
        </form>
        <a href="#">Forget Password?</a>
      </div>
    </div>
  );
}
