<script setup></script>

<template>
  <div class="page-title">
    <span class="material-symbols-outlined"> explore </span>
    <h1>Buscador de CEP</h1>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #ffd57a;
  padding: 1rem;
  border-radius: 0px 0.5rem 0.5rem 0px;
  position: fixed;
  top: 2rem;
  left: 0;
  text-transform: uppercase;

  h1 {
    font-family: "Barlow", serif;
    font-weight: 500;
  }

  h1,
  span {
    font-size: 2.5rem;
  }
}
</style>
