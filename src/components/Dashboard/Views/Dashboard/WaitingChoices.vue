<template>
  <div class="container-fluid">
    <h4 class="mb-4 mt-2 text-danger" @click="test()">
      Pending Candidates
      <i
        :class="`fa fa-caret-${collapsed ? 'right' : 'down'}`"
        style="color: #333; cursor: pointer; margin-left: 10px"
        @click="collapsed = !collapsed"
      />
    </h4>
    <card v-if="!collapsed" class="col-12 float-left">
      <div class="col">
        <datatable
          v-if="datatable.data"
          :class="{ 'loading-table': loading }"
          v-bind="datatable"
        />
      </div>
    </card>
  </div>
</template>

<script>
import Vue from "vue";
import Card from "src/components/UIComponents/Cards/Card.vue";
import ShowTableActions from "src/components/Dashboard/Views/Dashboard/ShowTableActions";
import DetailModal from "src/components/Dashboard/Views/Dashboard/DetailModal";
import TableCustomColumn from "src/components/UIComponents/DataTable/TableCustomColumn";
import TableStatus from "src/components/UIComponents/DataTable/TableStatus";
import CategoryForm from "src/components/Dashboard/Views/Category/CategoryForm";
export default {
  components: {
    Card,
    DetailModal,
    TableCustomColumn,
    ShowTableActions,
    TableStatus,
    CategoryForm,
  },
  props: ["bus", "categories"],
  data() {
    return {
      collapsed: false,
      loading: false,
      category: null,
      datatable: {
        columns: [
          {
            title: "Choices",
            field: "choice_title",
            thStyle: { width: "30%" },
            tdComp: TableCustomColumn,
          },
          {
            title: "Added By",
            field: "user.username",
            thStyle: { width: "30%" },
            tdComp: TableCustomColumn,
          },
          {
            title: "Survey",
            field: "only_survey.title",
            thStyle: { width: "30%" },
            tdComp: TableCustomColumn,
          },
          {
            tdComp: ShowTableActions,
            visible: "true",
            thStyle: { width: "10%" },
            tdStyle: { width: "30%" },
          },
        ],
        data: null,
        total: 0,
        query: { sort: "id", order: "asc" },
        selection: this.selection ? [] : null,
        HeaderSettings: false,
        supportNested: true,
        supportBackup: true,
        xprops: {
          eventbus: new Vue(),
        },
        surveyChoices: [],
      },
    };
  },
  watch: {
    surveyChoices: function (item) {
      // console.log(item);
    },
  },
  created() {
    this.datatable.xprops.eventbus.$on("detail", (item) => {
      this.$router.push({
        name: "admin.survey_edit",
        params: { id: item.only_survey.id },
      });
    });

    this.getAllPendingChoices();
  },
  methods: {
    getAllPendingChoices() {
      this.loading = true;
      this.$store
        .dispatch("definition/getAllPendingChoices")
        .then((response) => {
          // this.datatable.data = response.set.filter(
          //   x => x.only_survey.type !== "special"
          // );
          const filteredData = response.set.filter((x) => {
            if (x && x.survey_type == "normal") {
              // if (x && x.only_survey && x.only_survey.type == "normal") {
              // console.log("Filtered Data:", x); // Log the filtered data
              return true; // Keep the item in the filtered array
            }
            return false; // Exclude the item from the filtered array
          });

          this.datatable.data = filteredData;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>
