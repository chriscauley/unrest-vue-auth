<template>
  <div :class="css.modal.outer('-relative unrest-auth')">
    <div :class="css.modal.content('-auto')">
      <h2>{{ mode.title }}</h2>
      <p v-if="mode.text">{{ mode.text }}</p>
      <unrest-schema-form :form_name="mode.form_name" :success="success" @error="onError" />
      <unrest-auth-social-links />
      <div v-if="mode.extra" v-is="mode.extra" />
    </div>
  </div>
</template>

<script>
import config from './config'

const css = {
  modal: {
    outer: (s) => `modal ${s}`,
    content: (s) => `modal-content ${s}`,
  },
}

export default {
  name: 'UnrestAuthForm',
  __route: {
    meta: { authRedirect: true },
  },
  data() {
    return { css }
  },
  computed: {
    mode() {
      return config.modes.find((m) => m.slug === this.$route.params.auth_mode)
    },
  },
  methods: {
    onError(error) {
      config.onError?.(error)
    },
    success() {
      // reload route to cause router to redirect to next or /
      this.$auth.markStale()
      const next = this.mode.next || this.$route.query.next || '/'
      this.$auth.fetch().then(() => this.$router.replace(next))
    },
  },
}
</script>
