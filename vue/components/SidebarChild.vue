<template>
  <ul id="Dashboards" class="iq-submenu collapse" :class="collapsedClass" data-parent="#iq-sidebar-toggle">
    <template v-for="(item, inx) in childItems">
      <router-link
        exact
        tag="li"
        :key="parentKey + '-' + inx"
        activeClass="active"
        :to="{ name: item.page }"
      >
        <i class="las la-share-alt"></i><span>{{ item.title }}</span>
      </router-link>
    </template>
  </ul>
</template>

<script>
export default {
  name: "SidebarChild",
  props: [
    'childItems',
    'parentKey',
    'open'
  ],
  data() {
    return {
      collapsedClass: ''
    }
  },
  watch: {
    'open': {
      handler: function (status) { console.log(status,43645)
        if (true === status) {
          this.collapsedClass = 'show'
        } else {
          this.collapsedClass = ''
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
