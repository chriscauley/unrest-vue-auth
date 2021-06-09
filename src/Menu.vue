<template>
  <ur-dropdown v-if="user" :items="dropdown_items" :title="user.username" />
  <div v-else>
    <router-link to="/auth/login/" class="btn -link">
      Log In
    </router-link>
    <router-link to="/auth/sign-up/" class="btn -link">
      Sign Up
    </router-link>
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
    user() {
      return this.$store.auth.get();
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
