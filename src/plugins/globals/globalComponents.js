import fgInput from "src/components/UIComponents/Inputs/formGroupInput.vue";
import DropDown from "src/components/UIComponents/Dropdown.vue";
import Switches from "vue-switches";
import Vue2Dropzone from "vue2-dropzone";
import Datepicker from "vuejs-datepicker";
import Treeselect from "@riophae/vue-treeselect";

const GlobalComponents = {
  install(Vue) {
    Vue.component("FgInput", fgInput);
    Vue.component("DropDown", DropDown);
    Vue.component("Switches", Switches);
    Vue.component("Dropzone", Vue2Dropzone);
    Vue.component("Datepicker", Datepicker);
    Vue.component("Treeselect", Treeselect);
  },
};

export default GlobalComponents;
