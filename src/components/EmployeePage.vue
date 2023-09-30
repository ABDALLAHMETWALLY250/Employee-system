<template>
  <v-container fluid class="my-14">
    <v-row v-if="employies.length > 0">
      <v-col cols="12">
        <v-btn color="success">
          <a href="http://todo-system-simple.netlify.app/" target="_blank">
            <v-icon>mdi-view-dashboard</v-icon> Manage Projects
          </a>
        </v-btn>
      </v-col>
      <v-col cols="12" md="4" sm="6" v-for="emp of employies" :key="emp.id">
        <v-card class="mx-auto" max-width="400">
          <v-card-title
            class="text-blue"
            style="border: 1px solid black; text-transform: capitalize"
            >{{ emp.fullname }}</v-card-title
          >

          <v-img
            :src="emp.avatar"
            :lazy-src="emp.avatar"
            aspect-ratio="1"
            class="align-end text-white"
            width="100%"
            cover
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

          <v-card-text>
            <div
              style="
                border-bottom: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: space-between;

                font-size: 16px;
                padding: 5px;
              "
            >
              <span> Email:</span>
              <p>{{ emp.email }}</p>
            </div>
          </v-card-text>

          <v-card-text>
            <div
              style="
                border-bottom: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: space-between;

                font-size: 16px;
                padding: 5px;
              "
            >
              <span>Dept:</span>
              <p style="text-transform: capitalize">{{ emp.dept }}</p>
            </div>
          </v-card-text>

          <v-card-text>
            <div
              style="
                border-bottom: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: space-between;

                font-size: 16px;
                padding: 5px;
              "
            >
              <span>Phone:</span>
              <p>{{ emp.phone }}</p>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              variant="outlined"
              class="my-3"
              @click="
                $router.push(`/view-employee-page/${emp.id}/${emp.fullname}`)
              "
              color="blue"
            >
              <v-icon>mdi-eye</v-icon>
              View</v-btn
            >
            <v-btn
              variant="outlined"
              class="my-3"
              @click="$router.push(`/edit-page/${emp.id}/${emp.fullname}`)"
              color="green"
            >
              <v-icon>mdi-pencil</v-icon>
              Edit</v-btn
            >
            <v-btn
              color="red"
              variant="outlined"
              class="my-3"
              @click="deletEmployee(emp.id)"
            >
              <v-icon>mdi-delete</v-icon>

              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
        <div class="text-center">
          <v-dialog v-model="dialog" persistent max-width="800">
            <v-card>
              <v-card-text> This Employee Is Deleted </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>

    <v-row
      v-else
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50vh;
      "
    >
      <v-col cols="12 text-center ">
        <h2 style="font-size: 30px">You Need To Add Employees In First</h2>
      </v-col>
      <v-col cols="12 text-center">
        <v-btn @click="goAddPAge" color="green">
          <v-icon>mdi-plus</v-icon>
          Add Employee</v-btn
        >
      </v-col>
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
    this.getEmployee();
  },
  methods: {
    getEmployee() {
      axios
        .get(
          "https://employee-crud-e1e7a-default-rtdb.firebaseio.com/users/employee.json"
        )
        .then((res) => {
          this.frameEmployeeData(res.data);
        });
    },
    frameEmployeeData(employees) {
      this.employies = [];
      for (let key in employees) {
        this.employies.push({ ...employees[key], id: key });
      }
    },
    deletEmployee(id) {
      axios
        .delete(
          `https://employee-crud-e1e7a-default-rtdb.firebaseio.com/users/employee/${id}.json`
        )
        .then((response) => {
          this.getEmployee();
        });
      this.dialog = true;
    },
    goAddPAge() {
      this.$router.push("/new-employee-page");
    },
  },
};
</script>

<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
}
</style>
