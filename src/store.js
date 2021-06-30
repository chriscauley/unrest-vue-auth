import { ReactiveRestApi } from "@unrest/vue-reactive-storage";
import config from "./config";

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
  if (!config.enabled) {
    return api.state.user;
  }
  fetch();
  return api.get("auth/user.json")?.user;
};
const logout = () => {
  return config.enabled
    ? api.fetch("auth/logout/").then(refetch)
    : Promise.resolve();
};
const refetch = () => {
  if (!config.enabled) {
    return Promise.resolve(api.state.user);
  }
  api.markStale();
  return fetch();
};

export default {
  api,
  get,
  fetch,
  logout,
  refetch,
  markStale: api.markStale
};
