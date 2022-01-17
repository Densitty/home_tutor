<template>
  <section>
    <tutor-filter @change-text="setFilters"></tutor-filter>
  </section>

  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register" v-if="!isTutorRegistered"
          >Register as Tutor</base-button
        >
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
import TutorFilter from "../../components/tutors/TutorFilter.vue";
import TutorItem from "../../components/tutors/TutorItem.vue";
export default {
  components: {
    TutorItem,
    TutorFilter,
  },
  data() {
    return {
      activeSearch: "",
    };
  },
  methods: {
    setFilters(searchText) {
      this.activeSearch = searchText;
    },
  },
  computed: {
    filteredTutors() {
      const tutors =
        this.$store.getters[
          /* tutors-> namespaced name/tutors ->getter title */
          "tutors/tutors"
        ];

      /* filter tutors based on their subject area(s) */
      const myTutors = tutors.filter((tutor) => {
        const search = tutor.areas.reduce((acc, area) => {
          // console.log(this.activeSearch);
          // return area.toLowerCase().includes(this.activeSearch.toLowerCase()); /* not working for searching 'desktop appreciation */

          if (area.toLowerCase().includes(this.activeSearch.toLowerCase())) {
            return true;
          }
          return acc;
        }, false);

        return search;
      });
      // console.log(myTutors);

      return myTutors;
    },
    tutorsFound() {
      return this.$store.getters["tutors/tutorsPresent"];
    },
    isTutorRegistered() {
      // console.log(this.$store.getters["tutors/isTutor"]);
      return this.$store.getters["tutors/isTutor"];
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
