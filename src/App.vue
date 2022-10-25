<template>
  <div id="app">
    <game-board />
  </div>
</template>

<script>
import GameBoard from "./components/game-board.vue"
export default {
  name: 'App',
  components: { GameBoard }
}

</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>