<script setup>
import Buscador from "./components/Buscador.vue";
</script>

<template>
  <div class="page-title">
    <span class="material-symbols-outlined"> share_location </span>
    <h1>Buscador de CEP</h1>
  </div>
  <Buscador />
</template>

<style lang="scss" scoped>
.page-title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #ffd57a;
  padding: 1rem 1.5rem;
  border-radius: 0px 0.5rem 0.5rem 0px;
  position: fixed;
  top: 2rem;
  left: 0;
  text-transform: uppercase;
  color: #424866;

  h1 {
    font-family: "Barlow", serif;
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
  }

  span {
    font-size: 2.5rem;
  }
}
</style>
