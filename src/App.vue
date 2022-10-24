<template>
  <div id="app">
    <div ref="modal" class="game-board">
      <div class=" square" ref="square" :style="{ top: topNumber + 'px', left: leftNumber + 'px' }">
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin';

export default {
  mixins: [mixin],
  name: 'App',
  data() {
    return {
      topNumber: 0,
      leftNumber: 175,
    }
  },
  created() {

    const that = this;
    const timer = setInterval(function () {
      if (that.topNumber >= 332) {
        clearInterval(timer);
      } else {
        that.moveDown()
      }
    }, 1000);

  },
  methods: {
    moveLeft() {
      this.leftNumber = this.leftNumber - 5;
    },

    moveRight() {
      this.leftNumber = this.leftNumber + 5;
    },
    moveDown() {
      this.topNumber = this.topNumber + 10;
    },
  }
} 
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.game-board {

  border: 2px solid red;
  width: 350px;
  height: 350px;
}

.square {
  width: 15px;
  height: 15px;
  background-color: blue;
  position: relative;
  left: calc(50% - 16px);


}
</style>
