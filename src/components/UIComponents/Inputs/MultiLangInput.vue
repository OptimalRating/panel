<template>
  <div class="form-group row multi-lang-input-container">
    <slot name="label">
      <label v-if="label" class="control-label" :class="labelClass">
        {{ label }} :
      </label>
    </slot>
    <div :class="inputClass">
      <ul :id="tabId" class="nav nav-tabs multi-lang-tabs" role="tablist">
        <li v-for="(item, key, index) in items" class="nav-item">
          <a
            :id="key + '-tab'"
            class="nav-link"
            :class="[
              key == 'tr' ? 'active' : '',
              typeof items.tr == 'undefined' && index == 0 ? 'active' : '',
            ]"
            data-toggle="tab"
            :href="`#${tabId}-${key}`"
            role="tab"
            :aria-controls="key"
            aria-selected="false"
          >
            <template v-if="key == 'en'"
              ><span class="flag-icon flag-icon-gb"></span> {{ key }}</template
            >
            <template v-else-if="key == 'ar'"
              ><span class="flag-icon flag-icon-ae"></span> {{ key }}</template
            >
            <template v-else
              ><span class="flag-icon" :class="`flag-icon-${key}`"></span>
              {{ key }}</template
            >
          </a>
        </li>
      </ul>
      <div :id="tabId + '-content'" class="tab-content">
        <div
          v-for="(item, key, index) in items"
          :id="`${tabId}-${key}`"
          class="tab-pane show"
          :class="[
            key == 'tr' ? 'active' : '',
            typeof items.tr == 'undefined' && index == 0 ? 'active' : '',
          ]"
          role="tabpanel"
          :aria-labelledby="key + '-tab'"
        >
          <vue-editor
            v-if="editor"
            v-model="items[key]"
            :editor-toolbar="customToolbar"
          ></vue-editor>
          <textarea
            v-else
            v-model="items[key]"
            class="form-control"
            rows="3"
            cols="60"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  inheritAttrs: false,
  props: {
    label: String,
    value: [String, Number],
    inputClass: String,
    labelClass: String,
    tabId: String,
    items: Object,
    editor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    };
  },
};
</script>
<style></style>
