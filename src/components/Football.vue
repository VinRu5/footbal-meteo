<template>
  <div class="row justify-content-around align-items-center row-height">
    <h2 class="text-center">
      Carica il tuo file per determinare la squadra con la minor differenza reti
    </h2>
    <FileReader @load="text = $event"></FileReader>
    <button class="col-3 btn btn-light" @click="showTeam()">Avvia</button>
    <div v-if="showResult()">
      <div class="text-center mt-4">La minor differenza reti è di:</div>
      <div class="text-center">
        {{ winnerTeam.name }} con una differenza reti di
        {{ winnerTeam.scoredGoals - winnerTeam.concededGoals }}
      </div>
    </div>
    <HomeButton @showHome="$emit('showHome')"/>
  </div>
</template>

<script>
import FileReader from "./FileReader.vue";
import HomeButton from './HomeButton.vue';

export default {
  name: "Football",

  data: () => ({
    text: "",
    winnerTeam: {},
  }),
  components: {
    FileReader,
    HomeButton,
  },

  computed: {
    //Array contenente le squadre di calcio
    teams() {
      //Creo un array di linee di testo
      const lines = this.text
        .split("\n")
        .map((str) => str.replace(".", "").replace("-", ""));
      //elimino le stringhe vuote
      lines.splice(0, 1);
      lines.splice(21, 1);
      lines.splice(17, 1);

      //trasformo ogni linea in un Array
      const arrayLines = lines
        .map((str) => str.split(/\s/g))
        .map((array) => array.filter((str) => str.length > 0));

      let teams = [];
      //trasformo i dati delle squdre in oggetti
      arrayLines.forEach((line) => {
        teams.push({
          id: parseInt(line[0]),
          name: line[1],
          totalMatch: parseInt(line[2]),
          win: parseInt(line[3]),
          loser: parseInt(line[4]),
          draw: parseInt(line[5]),
          scoredGoals: parseInt(line[6]),
          concededGoals: parseInt(line[7]),
          points: parseInt(line[8]),
        });
      });

      return teams;
    },
  },

  methods: {
    showTeam() {
      //funzione per determinare la squadre con minor differenza reti

      if (this.teams.length === 0) {
        this.winnerTeam = {};
      } else {
        let winner;
        let teamWinner;

        this.teams.forEach((team) => {
          let difference = Math.abs(team.scoredGoals - team.concededGoals);

          if (typeof winner === "undefined" || winner > difference) {
            winner = difference;
            teamWinner = team;
          }
        });
        this.winnerTeam = teamWinner;
      }
    },

    showResult() {
      return Object.keys(this.winnerTeam).length === 0 ? false : true;
    },
  },
};
</script>

<style scoped>
</style>