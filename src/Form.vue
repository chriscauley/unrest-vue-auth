<template>
  <div :class="css.modal.outer('-relative')">
    <div :class="css.modal.content('-auto')">
      <h2>{{ mode.title }}</h2>
      <unrest-schema-form :form_name="mode.form_name" :success="success" />
      <unrest-auth-social-links />
    </div>
  </div>
</template>

<script>
// import css from "@unrest/css";
import config from "./config";

const css = {
  modal: {
    outer: s => `modal ${s}`,
    content: s => `modal-content ${s}`
  }
};

export default {
  __route: {
    meta: { authRedirect: true }
  },
  data() {
    return { css };
  },
  computed: {
    slug() {
      return this.$route.path.match(/(login|sign-up|forgot-password)/)[1];
    },
    mode() {
      return config.modes.find(m => m.slug === this.slug);
    }
  },
  methods: {
    success() {
      // reload route to cause router to redirect to next or /
      this.$auth.markStale();
      this.$auth
        .fetch()
        .then(() => this.$router.replace(this.$route.query.next || "/"));
    }
  }
};
</script>
