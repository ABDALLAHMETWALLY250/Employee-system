<template>
  <v-container>
    <div class="d-flex align-center justify-center w-100" style="height: 100vh">
      <form @submit.prevent="submit" class="w-100 pa-5">
        <v-row>
          <v-col cols="12">
            <v-text-field
              :class="{ 'form-error': v$.employies.fullname.$error }"
              v-model="employies.fullname"
              label="Full Name"
            ></v-text-field>
            <span class="error-feedback" v-if="v$.employies.fullname.$error">
              {{ v$.employies.fullname.$errors[0].$message }}
            </span>
          </v-col>

          <v-col cols="12">
            <v-text-field
              :class="{ 'form-error': v$.employies.avatar.$error }"
              v-model="employies.avatar"
              label="Your Image (Drive Link or anthor Link)"
            ></v-text-field>
            <span class="error-feedback" v-if="v$.employies.avatar.$error">
              {{ v$.employies.avatar.$errors[0].$message }}
            </span></v-col
          >

          <v-col cols="12">
            <v-text-field
              :class="{ 'form-error': v$.employies.employee_id.$error }"
              v-model="employies.employee_id"
              label="employee_id"
            ></v-text-field>
            <span class="error-feedback" v-if="v$.employies.employee_id.$error">
              {{ v$.employies.employee_id.$errors[0].$message }}
            </span>
          </v-col>

          <v-col cols="12">
            <v-text-field
              :class="{ 'form-error': v$.employies.phone.$error }"
              v-model="employies.phone"
              label="Phone Number"
              type="number"
            ></v-text-field>
            <span class="error-feedback" v-if="v$.employies.phone.$error">
              {{ v$.employies.phone.$errors[0].$message }}
            </span>
          </v-col>

          <v-col cols="12">
            <v-text-field
              :class="{ 'form-error': v$.employies.email.$error }"
              v-model="employies.email"
              label="E-mail"
            ></v-text-field>
            <span class="error-feedback" v-if="v$.employies.email.$error">
              {{ v$.employies.email.$errors[0].$message }}
            </span>
          </v-col>

          <v-col cols="12">
            <v-text-field
              :class="{ 'form-error': v$.employies.dept.$error }"
              v-model="employies.dept"
              label="Dept"
            ></v-text-field>
            <span class="error-feedback" v-if="v$.employies.dept.$error">
              {{ v$.employies.dept.$errors[0].$message }}
            </span>
          </v-col>

          <v-col cols="12">
            <v-text-field
              :class="{ 'form-error': v$.employies.position.$error }"
              v-model="employies.position"
              label="Position"
            ></v-text-field>
            <span class="error-feedback" v-if="v$.employies.position.$error">
              {{ v$.employies.position.$errors[0].$message }}
            </span>
          </v-col>
        </v-row>

        <div
          class="w-100"
          style="display: flex; align-items: center; justify-content: center"
        >
          <v-btn class="me-4" color="green" type="sumbit" @click="submit">
            <v-icon>mdi-plus</v-icon>
            Add
          </v-btn>

          <v-btn class="me-4" color="blue" @click="$router.push('/')">
            <v-icon>mdi-home</v-icon>
            Back
          </v-btn>

          <v-btn class="me-4" color="grey" @click="clear">
            <v-icon>mdi-cancel</v-icon>
            Clear
          </v-btn>
        </div>
      </form>

      <div class="text-center">
        <v-dialog v-model="dialog" persistent max-width="800">
          <v-card>
            <v-card-text>
              {{ employies.fullname }} Data Is Updated
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="$router.push('/')">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
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
      v$: useVuelidate(),
      dialog: false,
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
 
  mounted() {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://employee-crud-e1e7a-default-rtdb.firebaseio.com/users/employee/${this.$route.params.id}.json`
      )
      .then((res) => {
        this.employies = res.data;
      });
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
  methods: {
    submit() {
      this.v$.employies.$validate();
      if (!this.v$.employies.$error) {
        axios
          .put(
            `https://employee-crud-e1e7a-default-rtdb.firebaseio.com/users/employee/${this.$route.params.id}.json`,
            this.employies
          )
          .then((res) => {
            console.log(res.status);
          });
        this.dialog = true;
      }
    },
    clear() {
      this.employies = {
        fullname: "",
        employee_id: "",
        avatar: "",
        phone: "",
        email: "",
        dept: "",
        position: "",
      };
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
