<template>
  <div class="shopping-bag-detail">
    <div v-if="loading" class="loader"></div>
    <div class="clearfix"></div>
    <div v-if="row.choices.length === 0">
      <h4>Not Found</h4>
    </div>
    <div class="row">
      <div class="col-12">
        <datatable
          v-if="datatable.data"
          :class="{ 'loading-table': loading }"
          v-bind="datatable"
        />
      </div>
    </div>
    <modal
      name="fake-modal"
      height="auto"
      :draggable="true"
      :classes="['v--modal', 'm-modal']"
    >
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 row">
              <label class="col-3 col-form-label">Total Vote :</label>
              <div class="col-9">
                <input
                  v-model="voteCount"
                  type="text"
                  class="form-control col-7 float-left"
                />
              </div>
            </div>
            <div class="col-12 row">
              <label class="col-3 col-form-label">Mark (0-5) :</label>
              <div class="col-9">
                <input
                  v-model="mark"
                  type="text"
                  class="form-control col-7 float-left"
                />
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-round btn-fill px-4 col-4 float-right"
                  :disabled="saving"
                  @click="fakeVote()"
                >
                  {{ saving ? "Voting..." : "Vote" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import Vue from "vue";
import TotalVotes from "src/components/Dashboard/Views/SpecialSurvey/TotalVotes";
import ChoicesAction from "src/components/Dashboard/Views/SpecialSurvey/ChoicesAction";
export default {
  props: ["row", "xprops", "nested"],
  data() {
    return {
      saving: false,
      datatable: {
        columns: [
          { title: "ID", field: "id", sortable: true },
          { title: "NAME", field: "choice_title", sortable: true },
          { title: "TOTAL VOTE", field: "votes", tdComp: TotalVotes },
          {
            tdComp: ChoicesAction,
            visible: "true",
            thStyle: { width: "10%" },
            tdStyle: { width: "10%" },
          },
        ],
        data: [],
        total: 0,
        query: { sort: "id", order: "asc" },
        selection: this.selection ? [] : null,
        HeaderSettings: false,
        supportNested: true,
        supportBackup: true,
        xprops: {
          eventbus: new Vue(),
        },
      },
      searchOptions: {
        sku: null,
      },
      loading: false,
      items: null,
      choices: [],
      modalMode: null,
      bus: new Vue(),
      id: null,
      mark: 0,
      voteCount: 0,
    };
  },
  created() {
    this.datatable.data = this.row.choices;
    this.datatable.xprops.eventbus.$on("edit", (item) => {
      this.edit(item);
    });
    this.datatable.xprops.eventbus.$on("delete", (item) => {
      this.delete(item);
    });
    this.datatable.xprops.eventbus.$on("fake", (item) => {
      this.choices = item;
      this.$modal.show("fake-modal");
    });
  },
  methods: {
    fakeVote() {
      this.saving = true;
      let item = {
        choice_id: this.choices.id,
        count: this.voteCount,
        mark: this.mark,
      };
      this.$store
        .dispatch("definition/fakeVote", { id: this.row.id, data: item })
        .then((response) => {
          this.notify("Updated successfully.", "success");
          this.saving = false;
          this.xprops.eventbus.$emit("refresh", this.row);
        })
        .catch(() => (this.saving = false));
    },
  },
};
</script>
