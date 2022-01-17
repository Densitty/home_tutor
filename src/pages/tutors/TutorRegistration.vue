<template>
  <section>
    <base-card>
      <h2>Register as a tutor!</h2>
      <tutor-form @save-data="registerTutor"></tutor-form>
    </base-card>
  </section>
</template>

<script>
import TutorForm from "../../components/tutors/TutorForm.vue";
export default {
  components: {
    TutorForm,
  },
  methods: {
    registerTutor(data) {
      // dispatch the action
      /* this.$store.dispatch(namespace/actionName) */
      this.$store.dispatch("tutors/addTutorAction", data);

      // redirect to the home page on successful dispatch
      // this.$router.push("/coaches") /*  */
      this.$router.replace(
        "/tutors"
      ); /* same as above but won't be able to navigate back to previous page (/register) */
    },
  },
};
</script>
