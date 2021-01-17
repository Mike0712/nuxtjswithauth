<template>
  <div class="iq-sidebar  sidebar-default ">
    <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
      <a href="index.html" class="header-logo">
        <img src="../assets/images/logo.png" class="img-fluid rounded-normal light-logo" alt="logo">
        <img src="../assets/images/logo-white.png" class="img-fluid rounded-normal darkmode-logo" alt="logo">
      </a>
      <div class="iq-menu-bt-sidebar">
        <i class="las la-bars wrapper-menu"></i>
      </div>
    </div>
    <div class="data-scrollbar" data-scroll="1">
      <nav class="iq-sidebar-menu">
        <ul id="iq-sidebar-toggle" class="iq-menu">
          <template v-for="(item, i) in sidebarItems">
            <router-link
              exact
              tag="li"
              :key="i"
              :to="{ path: item.page }"
              :event="hasChildren(item) ? 'none' : 'click'"
              @click.native="clickToggle(i)"
            >
              <a data-toggle="collapse" :aria-expanded="menuitem.includes(i)" :class="menuitem.includes(i) ? '' : 'collapsed'">
                <i :class="setIcon(item.icon)"></i><span>{{ item.title }}</span>
                <i class="las la-angle-right iq-arrow-right arrow-active"></i>
                <i class="las la-angle-down iq-arrow-right arrow-hover"></i>
              </a>
            </router-link>
            <ul :id="item.title" class="iq-submenu collapse" :class="menuitem.includes(i) ? 'show' : ''" data-parent="#iq-sidebar-toggle">
              <template v-if="" v-for="(child, inx) in item.children">
                <router-link
                  exact
                  tag="li"
                  :key="i + '-' + inx"
                  activeClass="active"
                  :to="{ name: child.page }"
                >
                  <i class="las la-share-alt"></i><span>{{ child.title }}</span>
                </router-link>
              </template>
            </ul>
          </template>
        </ul>
      </nav>
      <div id="sidebar-bottom" class="position-relative sidebar-bottom">
        <div class="card bg-primary rounded">
          <div class="card-body">
            <div class="sidebarbottom-content">
              <div class="image"><img src="../assets/images/layouts/side-bkg.png" class="img-fluid" alt="side-bkg">
              </div>
              <h5 class="mb-3 text-white mt-3">Did you Know ?</h5>
              <p class="mb-0 text-white">You can add additional user in your Account's Settings</p>
              <button type="button" class="btn bg-light  mt-3"><i class="fas fa-plus-square"></i> New Program</button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3"></div>
    </div>
  </div>
</template>

<script>
// import SidebarChild from "@/components/SidebarChild";

export default {
  name: "Sidebar",
  components: {
    // SidebarChild
  },
  data() {
    return {
      menuitem: []
    }
  },
  computed: {
    sidebarItems() {
      return this.$store.getters['sidebar/sidebarItems']
    }
  },
  methods: {
    setIcon(icon) {
      const type = Object.keys(icon)[0];
      let cl;
      switch (type) {
        case 'fa':
          cl = 'far fa-' + icon.type
          break;
        case 'la':
          cl = 'las la-' + icon[type]
          break;
        case 'dr':
          cl = 'dripicons dripicons' + icon.type
          break;
        case 'ri':
          cl = 'ri-' + icon.type
          break;
        default:
          cl = ''
      }
      return cl;
    },
    hasChildren(item) {
      return item.children && item.children.length
    },
    clickToggle(i) {
      const ind = this.menuitem.findIndex(item => item === i);
      ind === -1 ? this.menuitem.push(i) : this.menuitem.splice(ind, 1);
    }
  }
}
</script>

<style scoped>

</style>
