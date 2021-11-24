<template>
  <div class="row justify-content-around align-items-center row-height">
    <h2 class="text-center">
      Carica il tuo file per determinare il giorno con l'escursione termica più
      piccola
    </h2>
    <FileReader @load="text = $event"></FileReader>
    <button class="col-3 btn btn-light" @click="showDay()" data-test="buttonAvvia">Avvia</button>
    <div v-if="showResult()">
      <div class="text-center mt-4">La minor escursione termica è avvenuta il:</div>
      <div class="text-center">
        {{ winnerDay.day }} con una escursione di
        {{ winnerDay.maxTemp - winnerDay.minTemp }} gradi
      </div>
    </div>
    <HomeButton @showHome="$emit('showHome')"/>
  </div>
</template>

<script>
import FileReader from "./FileReader.vue";
import HomeButton from './HomeButton.vue';
export default {
  components: { FileReader, HomeButton },
  name: "Weather",

  data() {
    return {
      winnerDay: {},
    };
  },

  computed: {
    days() {
      //Creo un array di linee di testo
      const lines = this.text.split("\n").map((str) => str.replace("*", ""));
      //elimino le stringhe vuote
      lines.splice(33, 1);
      lines.splice(1, 1);
      lines.splice(0, 1);

      //trasformo ogni linea in un Array
      const arrayLines = lines
        .map((str) => str.split(/\s/g))
        .map((array) => array.filter((str) => str.length > 0));

      let days = [];
      //trasformo i dati delle squdre in oggetti
      arrayLines.forEach((line, index) => {
        days.push({
          id: index,
          day: parseInt(line[0]),
          maxTemp: parseInt(line[1]),
          minTemp: parseInt(line[2]),
        });
      });

      return days;
    },
  },

  methods: {
    showResult() {
      return Object.keys(this.winnerDay).length === 0 ? false : true;
    },

    showDay() { //funzione per determinare il giorno con la minor escursione termica
      if (this.days.length === 0) {
        this.winnerDay = {};
      } else {

        let winner;
        let dayWinner;

        this.days.forEach(day=>{
          let difference = day.maxTemp - day.minTemp;
          if(typeof winner === 'undefined' || winner > difference){
            winner = difference;
            dayWinner = day;
          }
        });

        this.winnerDay = dayWinner;
      }
    },
  },
};
</script>

<style>
</style>