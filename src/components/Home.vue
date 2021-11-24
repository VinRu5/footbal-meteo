<template>
  <div class="row justify-content-around align-items-center row-height">
      <!-- Componente Home per la gestione della prima pagina vista dall'utente -->
    <h1 class="col-12 home-text">Scegli il tipo di dati da analizzare</h1>
    <button 
        class="col-3 btn btn-light"
        @click="$emit('viewFootball')"
        data-test="buttonFootball"
    >
        Dati Football
    </button>
    <button 
        class="col-3 btn btn-light"
        @click="$emit('viewWeather')"
        data-test="buttonWeather"
    >
        Dati Meteo
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>