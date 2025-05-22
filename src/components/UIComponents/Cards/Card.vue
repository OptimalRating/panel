<template>
  <div class="card">
    <div v-if="$slots.image" class="card-image">
      <slot name="image"></slot>
    </div>
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <hr />
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style></style>
