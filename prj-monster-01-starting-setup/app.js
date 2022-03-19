function getAttackValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      battleLog: [],
      winner: null,
      currentRound: 0
    };
    },
    computed: {
      monsterBarStyles() {
        if (this.monsterHealth <= 0) {
            return {width: '0%'}
          }
            return { width: this.monsterHealth + "%" };
        },
      playerBarStyles() {
        if (this.playerHealth <= 0) {
            return {width: '0%'}
          }
            return { width: this.playerHealth + "%" };
      },
      mayUseSpecialAttack() {
          return this.currentRound % 3 !== 0;
        }
  },
  watch: {
    monsterHealth: function (value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //A Draw
        this.winner = "draw"
      } else if (value <= 0) {
        this.winner = "player"  
      }
    },
    playerHealth: function (value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw"
      } else if (value <= 0) {
        this.winner = "monster"
      }
    },

    },
  methods: {
    attackMonster() {
      this.currentRound++
      const monsterDamage = getAttackValue(5, 15);
      this.monsterHealth -= monsterDamage;
      this.addBattleLog('player', 'attack', monsterDamage)
      this.attackPlayer();
    },
    attackPlayer() {
      const playerDamage = getAttackValue(9, 20);
      this.playerHealth -= playerDamage;
      this.addBattleLog("monster", "attack", playerDamage);
    },
    specialAttack() {
      this.currentRound++;
      const monsterDamage = getAttackValue(14, 35)
      this.monsterHealth -= monsterDamage
            this.addBattleLog("player", "attack", monsterDamage);

      this.attackPlayer();
    },
    heal() {
      this.currentRound++;
      const heal = getAttackValue(10, 25)
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.addBattleLog("player", "heal", heal);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster'
    },
    reset() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
      this.battleLog = [];
    },
    addBattleLog(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      })
    }
  },
});

app.mount("#game");
