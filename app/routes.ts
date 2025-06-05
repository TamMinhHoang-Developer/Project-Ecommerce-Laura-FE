import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/auth/layout.tsx", [
    route("/sign-in", "routes/auth/sign_in/page.tsx"),
    //   route("./sign-up", "routes/auth/sign_up/SignUp.tsx0"),
  ]),
] satisfies RouteConfig;
