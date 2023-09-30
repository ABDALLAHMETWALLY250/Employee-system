<template>
  <v-layout>
    <v-app-bar color="blue" density="compact">
      <v-app-bar-title class="md-show">DashBoard Maneger</v-app-bar-title>
      <template v-slot:append>
        <div class="w-100 text-center">
          <v-btn @click="GoHome">
            <v-icon class="md-hideen lg-hideen" size="large"> mdi-home </v-icon>

            <p class="sm-hideen text-center">
              <v-icon size="large"> mdi-home </v-icon>
              Home
            </p>
          </v-btn>
          <v-btn @click="GoAdd">
            <v-icon class="md-hideen lg-hideen" size="large"> mdi-plus </v-icon>

            <p class="sm-hideen text-center">
              <v-icon size="large"> mdi-plus </v-icon>
              Add Employee
            </p>
          </v-btn>
        </div>
      </template>
    </v-app-bar>
  </v-layout>
</template>
<script>
export default {
  methods: {
    GoHome() {
      this.$router.push({ name: "EmployeePage" });
    },
    GoAdd() {
      this.$router.push({ name: "NewEmployee" });
    },
  },
};
</script>
