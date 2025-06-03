import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/sign-in", "routes/auth/sign_in/SignIn.tsx"),
  //   route("./sign-up", "routes/auth/sign_up/SignUp.tsx"),
] satisfies RouteConfig;
