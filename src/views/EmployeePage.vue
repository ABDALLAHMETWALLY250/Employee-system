<template>
  <LoadingPage />

  <EmployeePage />
</template>

<script>
import LoadingPage from "@/components/LoadingPage.vue";

import EmployeePage from "@/components/EmployeePage.vue";

export default {
  components: {
    LoadingPage,
    EmployeePage,
  },
};
</script>
