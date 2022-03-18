function getAttackValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      battleLog: [],
      gameOver: false,
    };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            return { width: this.playerHealth + "%" };
        }
     },
  methods: {
    attackMonster() {
      const monsterDamage = getAttackValue(5, 15);
      this.monsterHealth -= monsterDamage;
      this.attackPlayer();
    },
    attackPlayer() {
      const playerDamage = getAttackValue(9, 20);
      this.playerHealth -= playerDamage;
    },
    surrender() {},
  },
});

app.mount("#game");
