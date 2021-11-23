<template>
  <div class="row">
    <button @click="showTeam()">Click</button>
    <FileReader @load="text = $event"></FileReader>
  <div>{{ winnerTeam }}</div>
  </div>
</template>

<script>
import FileReader from "./FileReader.vue";

export default {
  name: "Football",

  data: () => ({
    text: "",
    winnerTeam: "",
  }),
  components: {
    FileReader,
  },

  computed: {
    teams() {
      //console.log(this.text)
      const lines = this.text
        .split("\n")
        .map((str) => str.replace(".", "").replace("-", ""));
      lines.splice(0, 1);

      const arrayLines = lines
        .map((str) => str.split(/\s/g))
        .map((array) => array.filter((str) => str.length > 0));

      let teams = [];
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

      console.log(teams);
      return teams;
    },
  },

  methods: {
    showTeam() {
        if(this.teams.length === 0) {
            this.winnerTeam = '';
        } else {
            
            let winner;

            this.teams.forEach(team=> {
                let difference = Math.abs(team.scoredGoals - team.concededGoals);
                //console.log(difference, 'difference', team.id)
                if(typeof winner === 'undefined' || winner > difference) {
                    winner = difference
                    //TODO da sistemare
                }
            })
            console.log(typeof winner, 'winner')
        }
    }
  },
};
</script>

<style>
</style>