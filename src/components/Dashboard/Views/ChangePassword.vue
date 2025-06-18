<!-- <template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <h4 class="mb-4 mt-2">Change Password</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <card>
            <form>
              <div class="form-group row">
                <label class="col-4 col-form-label">Old Password:</label>
                <div class="col-8">
                  <input type="password" name="oldPassword" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">New Password:</label>
                <div class="col-8">
                  <input type="password" name="password" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">Confirm Password:</label>
                <div class="col-8">
                  <input type="password" name="confirm" class="form-control" />
                </div>
              </div>
              <button
                type="button"
                name="button"
                class="btn btn-sm btn-fill btn-round btn-primary float-right mb-2 mt-2"
              >
                Save
              </button>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "src/components/UIComponents/Cards/Card.vue";
export default {

};
</script> -->

<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <h4 class="mb-4 mt-2">Change Password</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <card>
            <form @submit.prevent="onSubmit">
              <div class="form-group row">
                <label class="col-4 col-form-label">Old Password:</label>
                <div class="col-8">
                  <input
                    v-model="form.oldPassword"
                    type="password"
                    name="oldPassword"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">New Password:</label>
                <div class="col-8">
                  <input
                    v-model="form.password"
                    type="password"
                    name="password"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">Confirm Password:</label>
                <div class="col-8">
                  <input
                    v-model="form.confirm"
                    type="password"
                    name="confirm"
                    class="form-control"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-sm btn-fill btn-round btn-primary float-right mb-2 mt-2"
                :disabled="loading"
              >
                {{ loading ? "Saving..." : "Save" }}
              </button>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "src/components/UIComponents/Cards/Card.vue";
// import ApiUrl from "@/api/apiUrl"; // base API URL
import axios from "axios"; // Axios is the most common HTTP client

export default {
  components: {
    Card,
  },
  data() {
    return {
      form: {
        oldPassword: "",
        password: "",
        confirm: "",
      },
      loading: false,
    };
  },
  methods: {
    async post(url, data) {
      return axios.post(url, data);
    },
    async onSubmit() {
      if (this.form.password !== this.form.confirm) {
        notification.error({ message: "Passwords do not match" });
        return;
      }

      this.loading = true;
      try {
        await this.post(
          `${"https://server.optimalrating.com/api/"}check-password`,
          { password: this.form.oldPassword }
        );
        await this.post(
          `${"https://server.optimalrating.com/api/"}password-change`,
          { password: this.form.password }
        );

        this.loading = false;
        this.form.oldPassword = "";
        this.form.password = "";
        this.form.confirm = "";
        this.notify("Password has been updated.", "success");
      } catch (error) {
        this.loading = false;

        const errorMessage = error.response.config.url.includes(
          "check-password"
        )
          ? "Old password is wrong"
          : "Password could not be changed.";
        this.notify(errorMessage, "err");
      }
    },
  },
};
</script>
