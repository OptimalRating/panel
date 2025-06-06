import Sidebar from "./SideBar.vue";
import SidebarLink from "./SidebarLink.vue";
import CollapsibleLink from "./CollapsibleLink.vue";

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: "Dashboard",
      icon: "ti-panel",
      path: "/admin/overview",
    },
  ],
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          sidebarStore: SidebarStore,
        };
      },
    });

    Object.defineProperty(Vue.prototype, "$sidebar", {
      get() {
        return this.$root.sidebarStore;
      },
    });
    Vue.component("SideBar", Sidebar);
    Vue.component("SidebarLink", SidebarLink);
    Vue.component("CollapsibleLink", CollapsibleLink);
  },
};

export default SidebarPlugin;
