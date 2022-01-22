<template>
  <section class="not-found">
    <h2>Page not found</h2>
    <p>
      This page does not exist. Visit
      <router-link to="/tutors">tutors</router-link> page to see all tutors.
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  width: 100%;
  height: calc(100vh - 5rem);
  background: rgba(249, 243, 253, 0.959);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
}

.not-found h2 {
  text-transform: capitalize;
  margin-bottom: 2rem;
}

.not-found a {
  color: rgba(218, 28, 28, 0.801);
}
</style>
