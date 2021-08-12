<template>
  <div v-if="enabled" class="unrest-auth-menu" v-show="$auth.ready">
    <unrest-dropdown
      v-if="$auth.user"
      :items="dropdown_items"
      offset="16,7"
      placement="bottom-end"
      >
      <div class="unrest-auth-menu__trigger">
        <div v-if="$auth.user.avatar_url" class="avatar">
          <img :src="$auth.user.avatar_url" />
        </div>
        <i class="fa fa-user" v-else />
        {{ $auth.user.username }}
      </div>
    </unrest-dropdown>
    <div v-else>
      <router-link to="/auth/login/" class="btn -link">
        Log In
      </router-link>
      <router-link to="/auth/sign-up/" class="btn -link">
        Sign Up
      </router-link>
    </div>
  </div>
</template>

<script>
import config from "./config";
import store from './store';

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    enabled() {
      return config.enabled;
    },
    dropdown_items() {
      const { AUTH_START } = config;
      const click = () =>
        this.$auth.logout().then(() => this.$router.push(AUTH_START));
      return [...this.items, { text: "Logout", click }];
    }
  }
};
</script>
