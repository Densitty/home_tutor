<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 15px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

/* .mathematics {
  background-color: #3d008d;
  color: white;
}

.english {
  background-color: #71008d;
  color: white;
}

.french {
  background-color: #8d006e;
  color: white;
} */
</style>
