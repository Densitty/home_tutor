<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }} / hour</h3>
    </base-card>
  </section>

  <section>
    <base-card>
      <header>
        <h2>Hire me for your ward(s)</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area">
      </base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedTutor: null /* initially set the tutor to null */,
    };
  },
  computed: {
    fullName() {
      return `${this.selectedTutor.firstName} ${this.selectedTutor.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/contact`;
    },
    areas() {
      return this.selectedTutor.areas;
    },
    rate() {
      return this.selectedTutor.hourlyRate;
    },
    description() {
      return this.selectedTutor.description;
    },
  },
  created() {
    /* after the component is created, set the selectedTutor to be the tutor which was clicked on tutorslist page through the id */
    this.selectedTutor = this.$store.getters["tutors/tutors"].find(
      (tutor) => tutor.id === this.id
    );
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1.5rem;
}

p {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
</style>
