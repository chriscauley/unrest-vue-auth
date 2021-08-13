const config = {
  AUTH_START: "/auth/login/",
  AUTH_REDIRECT: "/",
  enabled: true,
  modes: [
    {
      slug: "login",
      form_name: "schema/LoginForm",
      title: "Login"
    },
    {
      slug: "sign-up",
      form_name: "schema/SignUpForm",
      title: "Sign Up"
    },
    {
      slug: "reset-password",
      form_name: "schema/ResetPassword",
      title: "Reset Password"
    }
  ]
};

export default config;
