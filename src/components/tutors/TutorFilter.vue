<template>
  <base-card>
    <h2>Find your Home Tutor</h2>

    <span class="filter-option">
      <input
        type="text"
        class="search-field"
        placeholder="Type your subject/field to find a tutor"
        id="search"
        @keyup="setText"
      />
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-text"],
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    setText(event) {
      // console.log(event.target.value);
      this.searchText = event.target.value;
      this.$emit("change-text", this.searchText);
    },
  },
};
</script>

<style scoped>
.search-field {
  height: 2.5rem;
  padding: 1rem;
  display: inline-block;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  outline: none;
  border: 2px solid #3a0061;
}

.search-field:focus {
  border-color: #270041;
}
</style>
