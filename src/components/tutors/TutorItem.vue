<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ tutorPrice }} / hour</h4>
    <div>
      <base-badge :type="area" :title="area" v-for="area in areas" :key="area">
      </base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" v-bind:to="tutorContactLink"
        >Contact</base-button
      >
      <base-button link :to="tutorLink">View Detail</base-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TutorItem",
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
      // return this.firstName;
    },
    tutorContactLink() {
      // console.log(this.$route);
      return `${this.$route.path}/${this.id}/contact`;
    },
    tutorLink() {
      return `${this.$route.path}/${this.id}`;
    },
    tutorPrice() {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(this.rate);
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
