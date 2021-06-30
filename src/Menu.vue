<template>
  <div v-if="enabled" class="unrest-auth-menu" v-show="$auth.ready">
    <unrest-dropdown
      v-if="$auth.user"
      :items="dropdown_items"
      :title="$auth.user.username"
    />
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
