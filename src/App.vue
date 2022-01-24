<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  color: #a01e1e;
}

.spinner-body {
  background: rgba(61, 0, 141, 0.6);
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-300px);
}

.route-leave-from {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-to {
  opacity: 1;
  transform: translateY(30px);
}
</style>
