<template>
  <div
    class="sidebar"
    :style="sidebarStyle"
    :data-color="backgroundColor"
    :data-image="backgroundImage"
  >
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="#">
          <div class="logo-img">
            <img src="static/img/logo.png" style="filter: invert(70%)" />
          </div>
        </a>
      </div>

      <slot name="content"></slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
            @click="closeNavbar"
          >
            <i :class="link.icon"></i>
            <p>{{ link.name }}</p>
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  components: {
    SidebarLink,
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  props: {
    backgroundColor: {
      type: String,
      default: "black",
      validator: (value) => {
        let acceptedValues = [
          "",
          "blue",
          "azure",
          "green",
          "orange",
          "red",
          "purple",
          "black",
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    backgroundImage: {
      type: String,
      default: "static/img/sidebar.jpg",
    },
    activeColor: {
      type: String,
      default: "danger",
      validator: (value) => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger",
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      };
    },
  },
};
</script>
<style></style>
