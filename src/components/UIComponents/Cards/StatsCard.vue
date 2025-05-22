<template>
  <card class="card-stats">
    <div class="row">
      <div v-if="$slots.header" class="col-5">
        <div class="icon-big text-center">
          <slot name="header"></slot>
        </div>
      </div>
      <div v-if="$slots.content" class="col-7">
        <div class="numbers">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <template #footer>
      <div v-if="$slots.footer" class="stats">
        <slot name="footer"></slot>
      </div>
    </template>
  </card>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "StatsCard",
  components: {
    Card,
  },
};
</script>
<style></style>
