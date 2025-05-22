<template>
  <form @submit.prevent="$emit('submitAction', item)">
    <div class="form-group row">
      <label class="col-4 col-form-label"
        >{{ $t("common.page.input.name") }} :</label
      >
      <div class="col-8">
        <input v-model="item.title" type="text" class="form-control" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-4 col-form-label"
        >{{ $t("common.page.input.body") }} :</label
      >
      <div class="col-8">
        <vue-editor
          v-model="item.body"
          :editor-toolbar="customToolbar"
        ></vue-editor>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-4 col-form-label"
        >{{ $t("common.page.input.order") }} :</label
      >
      <div class="col-8">
        <input v-model="item.order" type="text" class="form-control" />
      </div>
    </div>
  </form>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  props: ["item"],
  data() {
    return {
      customToolbar: [
        ["bold", "italic", "underline", "video"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    };
  },
};
</script>
