<template>
  <div class="action-list">
    <button
      class="btn btn-success"
      type="button"
      @click.prevent="actionClickHandler('translation')"
    >
      <i class="far fa-edit"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["row", "xprops", "nested"],
  mounted() {
    $(this.$el)
      .closest("tr")
      .addClass("selectable")
      .on("click", (event) => {
        this.singleClickHandler(event);
      });

    $(this.$el)
      .closest("tr")
      .addClass("selectable")
      .dblclick((event) => {
        this.dobuleClickHandler(event);
      });
  },
  methods: {
    actionClickHandler(key) {
      this.xprops.eventbus.$emit(key, this.row);
    },
    singleClickHandler(event) {
      this.xprops.eventbus.$emit("singleClick", this.row, event);
    },
    dobuleClickHandler(event) {
      this.xprops.eventbus.$emit("doubleClick", this.row, event);
    },
  },
};
</script>

<style lang="css"></style>
