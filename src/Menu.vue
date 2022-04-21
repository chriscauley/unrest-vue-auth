<template>
  <div v-if="enabled" class="unrest-auth-menu" v-show="$auth.ready">
    <unrest-dropdown
      v-if="$auth.user"
      :items="dropdown_items"
      offset="16,7"
      placement="bottom-end"
    >
      <div class="btn -text">
        <div v-if="$auth.user.avatar_url" class="avatar">
          <img :src="$auth.user.avatar_url" />
        </div>
        <i class="fa fa-user" v-else />
        {{ display_name }}
      </div>
    </unrest-dropdown>
    <div v-else>
      <router-link to="/auth/login/" class="btn -link">
        Log In
      </router-link>
      <router-link to="/auth/sign-up/" class="btn -link" v-if="signup_enabled">
        Sign Up
      </router-link>
    </div>
  </div>
</template>

<script>
import config from "./config";

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    signup_enabled() {
      return config.signup_enabled
    },
    display_name() {
      return config.getDisplayName(this.$auth.user)
    },
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
