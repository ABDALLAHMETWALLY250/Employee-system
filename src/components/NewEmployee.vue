<template>
  <v-container class="my-10">
    <v-form class="w-100">
      <v-row class="w-100">
        <v-col
          :class="{ 'form-error': v$.employies.fullname.$error }"
          cols="12"
        >
          <v-text-field
            label="Full Name"
            v-model="employies.fullname"
            required
            style="text-transforn: capitalize"
          ></v-text-field>
          <span class="error-feedback" v-if="v$.employies.fullname.$error">{{
            v$.employies.fullname.$errors[0].$message
          }}</span>
        </v-col>

        <v-col
          :class="{ 'form-error': v$.employies.employee_id.$error }"
          cols="12"
        >
          <v-text-field
            label="Employee_id"
            v-model="employies.employee_id"
            style="text-transform: capitalize"
            required
          ></v-text-field>
          <span class="error-feedback" v-if="v$.employies.employee_id.$error">
            {{ v$.employies.employee_id.$errors[0].$message }}
          </span>
        </v-col>

        <v-col :class="{ 'form-error': v$.employies.avatar.$error }" cols="12">
          <v-text-field
            label="Your Image"
            v-model="employies.avatar"
            required
          ></v-text-field>
          <span class="error-feedback" v-if="v$.employies.avatar.$error">
            {{ v$.employies.avatar.$errors[0].$message }}
          </span>
        </v-col>

        <v-col :class="{ 'form-error': v$.employies.phone.$error }" cols="12">
          <v-text-field
            label="Your Phone"
            v-model="employies.phone"
            type="number"
            required
            style="text-transform: lowercase"
          ></v-text-field>
          <span class="error-feedback" v-if="v$.employies.phone.$error">
            {{ v$.employies.phone.$errors[0].$message }}
          </span>
        </v-col>

        <v-col :class="{ 'form-error': v$.employies.email.$error }" cols="12">
          <v-text-field
            label="Your Email"
            v-model="employies.email"
            style="text-transform: capitalize"
          ></v-text-field>
          <span class="error-feedback" v-if="v$.employies.email.$error">
            {{ v$.employies.email.$errors[0].$message }}
          </span>
        </v-col>

        <v-col :class="{ 'form-error': v$.employies.dept.$error }" cols="12">
          <v-text-field
            label="Your Dept"
            v-model="employies.dept"
            style="text-transform: capitalize"
          ></v-text-field>
          <span class="error-feedback" v-if="v$.employies.dept.$error">
            {{ v$.employies.dept.$errors[0].$message }}
          </span>
        </v-col>

        <v-col
          :class="{ 'form-error': v$.employies.position.$error }"
          cols="12"
        >
          <v-text-field
            label="Your Position"
            v-model="employies.position"
            style="text-transform: capitalize"
          ></v-text-field>
          <span class="error-feedback" v-if="v$.employies.position.$error">
            {{ v$.employies.position.$errors[0].$message }}
          </span>
        </v-col>
      </v-row>
    </v-form>

    <v-btn class="mx-2" color="success" @click="submit">
      <v-icon>mdi-plus</v-icon> Add</v-btn
    >
    <v-btn
      class="mx-2"
      @click="$router.push('/')"
      variant="outlined"
      color="red"
    >
      <v-icon>mdi-cancel</v-icon> Cancel</v-btn
    >

    <div class="text-center">
      <v-dialog v-model="dialog" persistent max-width="800">
        <v-card>
          <v-card-text> {{ employies.fullname }} Data Is Added </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="$router.push('/')">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      v$: useVuelidate(),
      employies: {
        fullname: "",
        employee_id: "",
        avatar: "",
        phone: "",
        email: "",
        dept: "",
        position: "",
      },
    };
  },
  validations() {
    return {
      employies: {
        fullname: { required },
        employee_id: { required },
        avatar: { required },
        phone: { required },
        email: { required, email },
        dept: { required },
        position: { required },
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    submit() {
      this.v$.employies.$validate();
      if (!this.v$.employies.$error) {
        axios.post(
          "https://employee-crud-e1e7a-default-rtdb.firebaseio.com/users/employee.json",
          this.employies
        );
        this.dialog = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-col {
  .form-error,
  .error-feedback {
    color: rgb(193, 3, 3);
  }
}
</style>
