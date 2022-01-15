<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Tutor</base-button>
      </div>
      <ul v-if="tutorsFound">
        <tutor-item
          v-for="tutor in filteredTutors"
          :key="tutor.id"
          :id="tutor.id"
          :first-name="tutor.firstName"
          :last-name="tutor.lastName"
          :rate="tutor.hourlyRate"
          :areas="tutor.areas"
        ></tutor-item>
      </ul>
      <h3 v-else>No tutor found</h3>
    </base-card>
  </section>
</template>

<script>
import TutorItem from "../../components/tutors/TutorItem.vue";
export default {
  components: {
    TutorItem,
  },
  computed: {
    filteredTutors() {
      return this.$store.getters[
        /* tutors-> namespaced name/tutors ->getter title */
        "tutors/tutors"
      ];
    },
    tutorsFound() {
      return this.$store.getters["tutors/tutorsPresent"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  /* margin: 0;
  padding: 0 */
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
