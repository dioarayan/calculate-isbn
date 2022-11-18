<script setup>
const title = "Calculate for compelete ISBN";
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <calculate-digit></calculate-digit>
  </div>
</template>

<style>
body {
  font-family: "Verdana", sans-serif;
  background-color: rgb(73, 66, 141);
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

.container {
  height: auto;
  text-align: center;
  padding: 2em;
  border-radius: 15px;
  background-color: whitesmoke;
  box-shadow: 10px 10px 30px rgb(59, 59, 59);
}
</style>
