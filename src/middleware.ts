export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/payment"],
  // matcher: ["/((?!register|api|login).*)"],
};
