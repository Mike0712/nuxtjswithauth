<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand" href="#">Nuxt SSR</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <nuxt-link exact no-prefetch class="nav-link" active-class="active" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" active-class="active" to="/about">
            About
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" active-class="active" to="/users">
            Users
          </nuxt-link>
        </li>
        <li class="nav-item" v-if="!hasToken">
          <nuxt-link class="nav-link" active-class="active" to="/login">
            Login
          </nuxt-link>
        </li>
        <li class="nav-item" v-else>
          <a @click.prevent="logout" class="nav-link" active-class="active" to="/logout">
            Logout
          </a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: "Navbar",
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      Cookie.remove('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
