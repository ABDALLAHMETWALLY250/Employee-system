<template>
  <v-container
    style="display: flex; align-items: center; justify-content: center"
    class="my-15"
  >
    <v-row>
      <v-col class="d-flex child-flex">
        <v-img
          :src="employies.avatar"
          :lazy-src="employies.avatar"
          aspect-ratio="1"
          class="align-end text-white radius h"
          width="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-col class="d-flex align-center justify-center text-center">
        <v-card class="text-center w-100 h-auto" elevation="0">
          <div
            class="d-flex align-center justify-space-between text-center gap-md gap-lg gap-sm"
          >
            <span class="w--50">FullName:</span>
            <v-card-title style="text-transform: capitalize">{{
              employies.fullname
            }}</v-card-title>
          </div>
          <div
            class="d-flex align-center gap-lg gap-sm gap-md justify-space-between text-center"
          >
            <span class="w--50">EmoloyeeId:</span>
            <v-card-title>{{ employies.employee_id }}</v-card-title>
          </div>
          <div
            class="d-flex align-center gap-lg-dept gap-sm-dept gap-md-dept justify-space-between text-center"
          >
            <span class="w--50">Dept:</span>
            <v-card-title>{{ employies.dept }}</v-card-title>
          </div>
          <div
            class="d-flex align-center justify-space-between gap-lg-position gap-sm-position gap-md-position text-center"
          >
            <span class="w--50">Position:</span>
            <v-card-title>{{ employies.position }}</v-card-title>
          </div>
          <div
            class="d-flex align-center justify-space-between gap-lg gap-sm gap-md text-center"
          >
            <span class="w--50">Email:</span>
            <v-card-title>{{ employies.email }}</v-card-title>
          </div>
          <div
            class="d-flex align-center justify-space-between gap-lg gap-sm gap-md text-center"
          >
            <span class="w--50">Phone Number:</span>
            <v-card-title>{{ employies.phone }}</v-card-title>
          </div>
        </v-card>
      </v-col>
      <div
        class="my-10 d-flex align-center justify-center w-100"
        style="gap: 20px"
      >
        <div class="d-flex" style="gap: 15px">
          <v-btn color="grey" @click="$router.push(`/`)">
            <v-icon>mdi-home</v-icon>
            Back
          </v-btn>
          <v-btn
            @click="
              $router.push(
                `/edit-page/${this.$route.params.id}/${employies.fullname}`
              )
            "
            color="green"
          >
            <v-icon>mdi-pencil</v-icon>
            Edit</v-btn
          >
          <v-btn color="red" @click="deletEmployee(this.$route.params.id)">
            <v-icon>mdi-delete</v-icon>
            Delete</v-btn
          >
        </div>
      </div>
      <div class="text-center">
        <v-dialog v-model="dialog" persistent max-width="800">
          <v-card>
            <v-card-text> This Employee Is Deleted </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="$router.push('/')">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      employies: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://employee-crud-e1e7a-default-rtdb.firebaseio.com/users/employee/${this.$route.params.id}.json`
      )
      .then((res) => {
        console.log(res);
        this.employies = res.data;
      });
  },
  methods: {
    deletEmployee(id) {
      axios
        .delete(
          `https://employee-crud-e1e7a-default-rtdb.firebaseio.com/users/employee/${id}.json`
        )
        .then((response) => {
          console.log(response.data);
        });
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .v-col {
    flex-basis: unset !important;
    flex-grow: 1;
    max-width: 100%;
  }
  .gap-sm {
    justify-content: space-between !important;
    border-bottom: 1px solid;
  }
  .gap-sm-dept {
    border-bottom: 1px solid;
    justify-content: space-between !important;
  }
  .gap-sm-position {
    border-bottom: 1px solid;
    justify-content: space-between !important;
  }
  .radius {
    border-radius: 50%;
  }
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
  .gap-md {
    border-bottom: 1px solid;
    gap: 100px;
  }
  .gap-md-dept {
    border-bottom: 1px solid;
    gap: 140px;
  }
  .gap-md-position {
    border-bottom: 1px solid;
    gap: 137px;
  }
  .v-row {
    flex-direction: column;
  }
  .w--50 {
    width: 50%;
  }
  .radius {
    border-radius: 30px;
  }
}
@media screen and (min-width: 1024px) {
  .gap-lg {
    border-bottom: 1px solid;
    gap: 150px;
  }
  .gap-lg-dept {
    border-bottom: 1px solid;
    gap: 186px !important;
  }
  .gap-lg-position {
    border-bottom: 1px solid;
    gap: 178px;
  }
  .radius {
    border-radius: 50%;
  }
}
</style>
