<template>
  <div class="row align-items-center">
    <div class="col-lg-6">
      <div v-if="$route.query.message" class="alert alert-danger mb-3">
        Need login first
      </div>
      <h2 class="mb-2">Sign In</h2>
      <p>To Keep connected with us please login with your personal info.</p>
      <form @submit.prevent="onSubmit()">
        <div class="row">
          <div class="col-lg-12">
            <div class="floating-label form-group">
              <input class="floating-input form-control" type="email" v-model="email" placeholder=" ">
              <label>Email</label>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="floating-label form-group">
              <input class="floating-input form-control" type="password" v-model="password" placeholder=" ">
              <label>Password</label>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="remember">
              <label class="custom-control-label" for="customCheck1">Remember Me</label>
            </div>
          </div>
          <div class="col-lg-6">
            <a href="auth-recoverpw.html" class="text-primary float-right">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign In</button>
        <p class="mt-3">
          Create an Account <a href="auth-sign-up.html" class="text-primary">Sign Up</a>
        </p>
        <p>
          <nuxt-link to="/">To home page</nuxt-link>
        </p>
      </form>
    </div>
    <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
      <img src="../assets/images/login/01.png" class="img-fluid w-80" alt="">
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: "login",
  layout: 'login-form',
  asyncData() {

  },
  data() {
    return {
      email: '',
      password: '',
      remember: false
    }
  },
  methods: {
    async onSubmit(e) {
       await this.$store.dispatch('login', {item: 'signup', email: this.email, password: this.password, remember: this.remember})
       if (this.token && Cookie) {
         Cookie.set('token', this.token)
         this.$router.push('/')
       }
    }
  },
  computed: {
    token() {
      return this.$store.getters.getToken
    }
  }
}
</script>

<style scoped>

</style>
