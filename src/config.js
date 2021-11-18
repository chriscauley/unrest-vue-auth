const config = {
  AUTH_START: "/auth/login/",
  AUTH_REDIRECT: "/",
  enabled: true,
  modes: [
    {
      slug: "login",
      form_name: "schema/login",
      title: "Login"
    },
    {
      slug: "sign-up",
      form_name: "schema/sign-up",
      title: "Sign Up"
    },
    {
      slug: "reset-password",
      form_name: "schema/reset-password",
      title: "Reset Password"
    }
  ]
};

export default config;
