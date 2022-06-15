var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, createVNode, createBlock, resolveDynamicComponent, withDirectives, withCtx, createTextVNode, vShow, Fragment, renderList } from "vue";
import querystring from "querystring";
import { ReactiveRestApi } from "@unrest/vue-storage";
const config = {
  AUTH_START: "/auth/login/",
  AUTH_REDIRECT: "/",
  enabled: true,
  signup_enabled: true,
  getDisplayName: (user) => user.username,
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
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const css = {
  modal: {
    outer: (s) => `modal ${s}`,
    content: (s) => `modal-content ${s}`
  }
};
const _sfc_main$2 = {
  name: "UnrestAuthForm",
  __route: {
    meta: { authRedirect: true }
  },
  data() {
    return { css };
  },
  computed: {
    mode() {
      return config.modes.find((m) => m.slug === this.$route.params.auth_mode);
    }
  },
  methods: {
    onError(error) {
      var _a;
      (_a = config.onError) == null ? void 0 : _a.call(config, error);
    },
    success() {
      this.$auth.markStale();
      const next = this.mode.next || this.$route.query.next || "/";
      this.$auth.fetch().then(() => this.$router.replace(next));
    }
  }
};
const _hoisted_1$2 = { key: 0 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_unrest_schema_form = resolveComponent("unrest-schema-form");
  const _component_unrest_auth_social_links = resolveComponent("unrest-auth-social-links");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($data.css.modal.outer("-relative unrest-auth"))
  }, [
    createElementVNode("div", {
      class: normalizeClass($data.css.modal.content("-auto"))
    }, [
      createElementVNode("h2", null, toDisplayString($options.mode.title), 1),
      $options.mode.text ? (openBlock(), createElementBlock("p", _hoisted_1$2, toDisplayString($options.mode.text), 1)) : createCommentVNode("", true),
      createVNode(_component_unrest_schema_form, {
        form_name: $options.mode.form_name,
        success: $options.success,
        onError: $options.onError
      }, null, 8, ["form_name", "success", "onError"]),
      createVNode(_component_unrest_auth_social_links),
      $options.mode.extra ? (openBlock(), createBlock(resolveDynamicComponent($options.mode.extra), { key: 1 })) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var AuthForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "UnrestAuthMenu",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    signup_enabled() {
      return config.signup_enabled;
    },
    display_name() {
      return config.getDisplayName(this.$auth.user);
    },
    enabled() {
      return config.enabled;
    },
    dropdown_items() {
      const { AUTH_START } = config;
      const click = () => this.$auth.logout().then(() => this.$router.push(AUTH_START));
      return [...this.items, { text: "Logout", click }];
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "unrest-auth-menu"
};
const _hoisted_2$1 = { class: "btn -text" };
const _hoisted_3$1 = {
  key: 0,
  class: "avatar"
};
const _hoisted_4$1 = ["src"];
const _hoisted_5 = {
  key: 1,
  class: "fa fa-user"
};
const _hoisted_6 = { key: 1 };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Log In ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Sign Up ");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_unrest_dropdown = resolveComponent("unrest-dropdown");
  const _component_router_link = resolveComponent("router-link");
  return $options.enabled ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
    _ctx.$auth.user ? (openBlock(), createBlock(_component_unrest_dropdown, {
      key: 0,
      items: $options.dropdown_items,
      offset: "16,7",
      placement: "bottom-end"
    }, {
      default: withCtx(() => [
        createElementVNode("div", _hoisted_2$1, [
          _ctx.$auth.user.avatar_url ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
            createElementVNode("img", {
              src: _ctx.$auth.user.avatar_url
            }, null, 8, _hoisted_4$1)
          ])) : (openBlock(), createElementBlock("i", _hoisted_5)),
          createTextVNode(" " + toDisplayString($options.display_name), 1)
        ])
      ]),
      _: 1
    }, 8, ["items"])) : (openBlock(), createElementBlock("div", _hoisted_6, [
      createVNode(_component_router_link, {
        to: "/auth/login/",
        class: "btn -link"
      }, {
        default: withCtx(() => [
          _hoisted_7
        ]),
        _: 1
      }),
      $options.signup_enabled ? (openBlock(), createBlock(_component_router_link, {
        key: 0,
        to: "/auth/sign-up/",
        class: "btn -link"
      }, {
        default: withCtx(() => [
          _hoisted_8
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]))
  ], 512)), [
    [vShow, _ctx.$auth.ready]
  ]) : createCommentVNode("", true);
}
var AuthMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  computed: {
    providers() {
      var _a;
      return (_a = config.oauth_providers) == null ? void 0 : _a.map(this.processProvider);
    }
  },
  methods: {
    processProvider(provider) {
      const qs = querystring.stringify({ next: this.$route.next });
      if (typeof provider === "string") {
        provider = { slug: provider };
      }
      const { slug } = provider;
      return __spreadValues({
        title: slug[0].toUpperCase() + slug.slice(1),
        href: `/login/${slug}/?${qs}`,
        class: `btn btn-${slug}`
      }, provider);
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "unrest-auth-social"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("div", { className: "unrest-auth-social__or" }, "-- Or Connect With --", -1);
const _hoisted_3 = { className: "unrest-auth-social__buttons" };
const _hoisted_4 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return ((_a = $options.providers) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createElementVNode("div", _hoisted_3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.providers, (provider) => {
        return openBlock(), createElementBlock("a", {
          href: provider.href,
          class: normalizeClass(provider.class),
          key: provider.slug
        }, toDisplayString(provider.title), 11, _hoisted_4);
      }), 128))
    ])
  ])) : createCommentVNode("", true);
}
var AuthSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const api = ReactiveRestApi({});
api.state.ready = false;
const fetch = () => {
  if (!config.enabled) {
    return Promise.resolve(api.state.user);
  }
  return api.fetch("auth/user.json").then(({ user }) => {
    api.state.ready = true;
    return user;
  });
};
const get = () => {
  var _a;
  if (!config.enabled) {
    return api.state.user;
  }
  fetch();
  return (_a = api.get("auth/user.json")) == null ? void 0 : _a.user;
};
const logout = () => {
  return config.enabled ? api.fetch("auth/logout/").then(refetch) : Promise.resolve();
};
const refetch = () => {
  if (!config.enabled) {
    return Promise.resolve(api.state.user);
  }
  api.markStale();
  return fetch();
};
var store = {
  api,
  get,
  fetch,
  logout,
  refetch,
  markStale: api.markStale
};
const requireAuth = (to, next) => {
  const user = store.get();
  if (user) {
    next();
    return;
  }
  if (to.path === config.AUTH_START) {
    throw "@unrest/vue-auth detected cyclic redirect";
  }
  next({
    path: config.AUTH_START,
    query: { next: to.fullPath }
  });
};
const redirectIfAuthed = (to, next) => {
  const user = store.get();
  if (user) {
    const url = to.query.next || config.AUTH_REDIRECT;
    if (to.path === url) {
      throw "@unrest/vue-auth detected cyclic redirect";
    }
    next(url);
    return;
  }
  next();
};
var checkAuth = (to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    store.fetch().then(() => requireAuth(to, next));
  } else if (to.matched.some((record) => record.meta.authRedirect)) {
    store.fetch().then(() => redirectIfAuthed(to, next));
  } else {
    next();
  }
};
const auth = __spreadProps(__spreadValues({
  AuthForm,
  AuthMenu,
  AuthSocialLinks,
  checkAuth,
  config,
  configure: (_config) => {
    var _a;
    Object.assign(config, _config);
    if (config.enabled && ((_a = store.api.state.user) == null ? void 0 : _a.id) === "offline") {
      store.api.state.user = null;
      store.api.state.ready = false;
    } else if (!config.enabled) {
      store.api.state.user = { id: "offline" };
      store.api.state.ready = true;
    }
  }
}, store), {
  get enabled() {
    return config.enabled;
  },
  get user() {
    return store.get();
  },
  get ready() {
    store.get();
    return store.api.state.ready;
  },
  routes: [
    {
      path: "/auth/:auth_mode/",
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
    }
  }
});
export { auth as default };
