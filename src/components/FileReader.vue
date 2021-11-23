<template>
  <input type="file" class="input-style" @change="loadTextFromFile">
</template>

<script>
export default {
    name: 'FileReader',
  methods: {
    //constructor FileReader per leggere il file in input
    loadTextFromFile(ev) {
      //prendo il file dall'input
      const file = ev.target.files[0];
      //genero l'oggetto reader
      const reader = new FileReader();
      //al caricamento invio il file per l'elaborazione nel componente padre
      reader.onload = e => this.$emit("load", e.target.result);
      //leggo il file
      reader.readAsText(file);
    }
  }
};
</script>

<style scoped>
  .input-style{
    margin: 32px;
    text-align: center;
  }
</style>