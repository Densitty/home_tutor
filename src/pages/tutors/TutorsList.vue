<template>
  <section>
    <tutor-filter @change-text="setFilters"></tutor-filter>
  </section>

  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadTutors">Refresh</base-button>
        <base-button
          link
          to="/register"
          v-if="!isTutorRegistered && !isLoading"
        >
          Register as Tutor
        </base-button>
      </div>

      <div class="spinner-body" v-if="isLoading">
        <base-spinner></base-spinner>
      </div>

      <ul v-else-if="tutorsFound">
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
      isLoading: false,
    };
  },
  methods: {
    setFilters(searchText) {
      this.activeSearch = searchText;
    },
    async loadTutors() {
      // while fetching/awaiting arrival of data
      this.isLoading = true;
      // reach out to the store to call the action
      /* this.$store.dispatch(getter namespace/action") */
      await this.$store.dispatch("tutors/loadTutorsAction");
      // after data is fetched, reset the isLoading ppty
      this.isLoading = false;
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
      return !this.isLoading && this.$store.getters["tutors/tutorsPresent"];
    },
    isTutorRegistered() {
      // console.log(this.$store.getters["tutors/isTutor"]);
      return this.$store.getters["tutors/isTutor"];
    },
  },
  created() {
    this.loadTutors();
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
.spinner-body {
  background: #3d008d;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}
</style>
