<template>
  <!-- <component :is="tag" v-bind="$attrs" tag="li" @click.native="hideSidebar">
    <a class="nav-link">
      <slot>
        <i v-if="link.icon" :class="link.icon"></i>
        <p>{{ link.name }}</p>
      </slot>
    </a>
  </component> -->
  <component :is="tag" v-bind="$attrs" tag="li" @click="hideSidebar">
  <a class="nav-link">
    <slot>
      <i v-if="link.icon" :class="link.icon"></i>
      <p>{{ link.name }}</p>
    </slot>
  </a>
</component>

</template>
<script>
export default {
  inject: {
    autoClose: {
      default: true,
    },
  },
  inheritAttrs: false,
  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: "",
          path: "",
          icon: "",
        };
      },
    },
    tag: {
      type: String,
      default: "router-link",
    },
  },
  methods: {
    hideSidebar() {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style></style>
