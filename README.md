# @unrest/vue-auth

This is my auth library for my personal projects. I will probably open source it at some point, but if you're interested in learning more feel free to message me or open a ticket. This is intended to be used with [vue-router](https://next.router.vuejs.org/) and vue3, but it should be easy to adapt to other versions and libraries.

## Usage

Install with `npm install @unrest/vue-auth`. Then `app.use(auth.plugin)` wherever your app is created. This will add components, add the global variables `$auth` and `$store.auth`, and add `$router.beforeEach(checkAuth)`. You can also optionally add `auth.config.oauth_providers=['twitter', ...]` to add social auth login links to `/login/${provider}`.

``` main.js
import { createApp } from 'vue'
import auth from '@unrest/vue-auth'

auth.config.oauth_providers = ['twitter', 'github'] // optional

createApp(App)
  .use(auth.plugin)
  .mount('#app')
```

Include `<unrest-auth-menu />` anywhere in your app. If the user is logged in this will be a dropdown with a logout link and any additional items. If not logged in this will show login and signup links.

``` Nav.vue
<template>
  <nav class="site-header">
    <a class="site-header__brand">My Site</a>
    ...
    <unrest-auth-menu />
  </nav>
</template
```

Add `route.meta.authRequired=true` to any route that needs login and `route.meta.authRedirect=true` to any url that should not be authed (for example, logged in users shouldn't see signup, password reset, etc pages).

``` router.js
import { createRouter, createWebHistory } from 'vue-router'
import PasswordResetView from '@/views/PasswordReset'
import UserSettingsView from '@/views/UserSettings'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'user-settings',
      path: '/user-settings',
      component: UserSettingsView,
      meta: { authRequired: true }, // redirects to /login if not logged in
    },
    {
      name: 'password-reset',
      path: '/password-reset',
      component: PasswordResetView,
      meta: { authRedirect: true }, // redirects to / if logged in
    },
    ...
  ]
})
```
