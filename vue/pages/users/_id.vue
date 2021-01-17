<template>
  <section>
    <h1>User {{ user.name }}</h1>

    <hr>

    <h3>{{ user.email }}</h3>
  </section>
</template>

<script>
import {SSR_API_URL} from '@/constants'

export default {
  middleware: ['auth'],
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, store, params}) {
    await store.dispatch('users/fetch', {item: 'user', id: params.id})
    const user = store.getters['users/currentUser'];
    return {user}
  }
}
</script>

