<template>
  <div class="btn-group">
    {{ title }}
    <a href="javascript:;" data-toggle="dropdown">
      <i class="far fa-filter" :class="{ 'text-muted': !keyword }"></i>
    </a>
    <ul class="dropdown-menu" style="padding: 3px">
      <div class="input-group input-group-sm">
        <input
          ref="input"
          v-model="keyword"
          type="search"
          class="form-control"
          :placeholder="`Search ${field}...`"
          @keydown.enter="search"
        />
        <span class="input-group-btn">
          <button
            class="btn btn-default far fa-search"
            @click="search"
          ></button>
        </span>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["field", "title", "query"],
  data: () => ({
    keyword: "",
  }),
  watch: {
    keyword(kw) {
      // reset immediately if empty
      if (kw === "") this.search();
    },
  },
  mounted() {
    $(this.$el).on("shown.bs.dropdown", (e) => this.$refs.input.focus());
  },
  methods: {
    search() {
      const { query } = this;
      // `$props.query` would be initialized to `{ limit: 10, offset: 0, sort: '', order: '' }` by default
      // custom query conditions must be set to observable by using `Vue.set / $vm.$set`
      // this.$set(query, this.field, this.keyword);
      query[this.field] = this.keyword;
      query.offset = 0; // reset pagination
    },
  },
};
</script>
<style>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: searchfield-cancel-button;
  cursor: pointer;
}
</style>
