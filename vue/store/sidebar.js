import sidebar from "assets/sidebar";

export const state = () => ({
  opened: true,
  items: sidebar || []
})

export const getters = {
  sidebarItems: state => state.items,
  menuState: state => state.opened
}
export const actions = {}
export const mutations = {}
