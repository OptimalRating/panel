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
            <form>
              <div class="form-group row">
                <label class="col-4 col-form-label">Old Password:</label>
                <div class="col-8">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">New Password:</label>
                <div class="col-8">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">Confirm Password:</label>
                <div class="col-8">
                  <input type="text" class="form-control" />
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
export default {};
</script>
