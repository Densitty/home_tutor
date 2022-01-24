<template>
  <div class="loading">
    <span>Loading ...</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  width: 200px;
  height: 200px;
  /* background: red; */
  border-radius: 50%;
  border-top: 10px solid #e74c3c;
  position: relative;
  animation: anim1 2s linear infinite;
}

.loading::before,
.loading::after {
  content: "";
  width: 200px;
  height: 200px;
  /* background: red; */
  position: absolute;
  top: 0;
  left: 0px;
  border-radius: 50%;
}

.loading::before {
  border-top: 10px solid #e67e22;
  transform: rotate(127deg);
  top: -8px;
  left: 1px;
}

.loading::after {
  border-top: 10px solid #3498db;
  transform: rotate(240deg);
  top: -10px;
  left: -5px;
}

.loading span {
  position: absolute;
  top: 90px;
  text-align: center;
  width: 200px;
  color: #fff;
  animation: anim2 2s linear infinite;
}

@keyframes anim1 {
  to {
    transform: rotate(360deg);
  }
}

@keyframes anim2 {
  to {
    transform: rotate(-360deg);
  }
}
</style>
