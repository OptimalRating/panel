<template>
  <div>
    <input v-model="row[field]" class="form-control" type="text" />
  </div>
</template>
<script>
export default {
  props: ["row", "field"],
};
</script>
