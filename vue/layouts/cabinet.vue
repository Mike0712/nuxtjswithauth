<template>
  <div class="wrapper">
    <Sidebar />
    <TopNavbar />

    <div class="content-page">
      <div class="container-fluid">
        <div class="row">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";

export default {
  name: "cabinet",
  components: {
    Sidebar,
    TopNavbar
  }
}
</script>

<style scoped>

</style>
