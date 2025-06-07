import { Outlet } from "react-router";
export default function AuthLayout() {
  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2">
        <img src="/auth/left.png" alt="left" className="w-full h-full" />
      </div>
      <div className="w-1/2">
        <Outlet />
      </div>
    </div>
  );
}
