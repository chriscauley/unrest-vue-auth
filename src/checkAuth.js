import store from './store'
import config from './config'

const requireAuth = (to, next) => {
  const user = store.get()
  if (user) {
    next()
    return
  }
  if (to.path === config.AUTH_START) {
    throw '@unrest/vue-auth detected cyclic redirect'
  }
  next({
    path: config.AUTH_START,
    query: { next: to.fullPath },
  })
}

const redirectIfAuthed = (to, next) => {
  const user = store.get()
  if (user) {
    const url = to.query.next || config.AUTH_REDIRECT
    if (to.path === url) {
      throw '@unrest/vue-auth detected cyclic redirect'
    }
    next(url)
    return
  }
  next()
}

export default (to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    store.fetch().then(() => requireAuth(to, next))
  } else if (to.matched.some((record) => record.meta.authRedirect)) {
    store.fetch().then(() => redirectIfAuthed(to, next))
  } else {
    next()
  }
}
