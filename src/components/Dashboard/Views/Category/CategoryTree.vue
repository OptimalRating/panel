<template>
  <div class="category-tree">
    <ul class="tree-view">
      <category-tree-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        :bus="bus"
        :depth="0"
      >
      </category-tree-item>
    </ul>
  </div>
</template>

<script>
import CategoryTreeItem from "src/components/Dashboard/Views/Category/CategoryTreeItem";
export default {
  components: {
    CategoryTreeItem,
  },
  props: ["items", "bus"],
};
</script>

<style lang="css"></style>
