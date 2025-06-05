import React, { type ReactElement } from "react";
import type { Route } from "./+types/sign_in";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Page(): React.ReactElement {
  return (
    <div className="mx-auto w-2/3">
      <div className="absolute top-[91px] left-[1136px] [font-family:'Volkhov-Regular',Helvetica] font-normal text-[#484848] text-[66.6px] tracking-[0] leading-[66.6px] whitespace-nowrap">
        FASCO
      </div>

      <div className="absolute top-[422px] left-[1136px] [font-family:'Volkhov-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-10 whitespace-nowrap">
        Enter Your New Password
      </div>

      <div className="absolute top-[1010px] left-[1625px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-10 whitespace-nowrap">
        FASCO Terms &amp; Codnitions
      </div>

      <div className="absolute w-[638px] h-[47px] top-[528px] left-[1136px]">
        <div className="absolute top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#9d9d9d] text-base tracking-[0] leading-10 whitespace-nowrap">
          New Password
        </div>
      </div>

      <div className="absolute w-[638px] h-[47px] top-[607px] left-[1136px]">
        <div className="absolute top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#9d9d9d] text-base tracking-[0] leading-10 whitespace-nowrap">
          Confirmation Password
        </div>
      </div>

      <div className="absolute w-[575px] h-[60px] top-[686px] left-[1175px] bg-[#5b86e5] rounded-lg">
        <div className="absolute top-[9px] left-[258px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-10 whitespace-nowrap">
          Submit
        </div>
      </div>
    </div>
  );
}
