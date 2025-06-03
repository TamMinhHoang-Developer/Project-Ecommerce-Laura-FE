import React, { type ReactElement } from "react";
import { LeftPicture, GoogleIcon, EmailIcon } from "../../../../public/auth";
import type { Route } from "./+types/sign_in";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function SignIn(): React.ReactElement {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div></div>
      <div></div>
    </div>
  );
}
