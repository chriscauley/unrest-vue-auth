import AuthForm from "./Form.vue";
import AuthMenu from "./Menu.vue";
import AuthSocialLinks from "./SocialLinks.vue";
import checkAuth from "./checkAuth";
import store from "./store";
import config from "./config";

const auth = {
  AuthForm,
  AuthMenu,
  AuthSocialLinks,
  config,
  ...store,
  get user() {
    return store.get();
  },
  get ready() {
    store.get(); // trigger fetch
    return store.api.state.ready;
  },
  routes: [
    {
      path: "/auth/:slug/",
      name: "auth",
      component: AuthForm,
      meta: { authRedirect: true }
    }
  ],
  plugin: {
    install: (app, _options) => {
      app.config.globalProperties.$auth = auth;
      app.component("UnrestAuthMenu", AuthMenu);
      app.component("UnrestAuthSocialLinks", AuthSocialLinks);

      const { $store, $router } = app.config.globalProperties;
      if ($store) {
        $store.auth = auth;
        $store.list.push(auth);
      }
      if ($router) {
        $router.beforeEach(checkAuth);
        // TODO why doesn't this work? I had to manually add this route in @/router/index.js
        // $router.addRoute(auth.route)
      }
    }
  }
};

export default auth;
