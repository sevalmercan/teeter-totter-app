<template>
  <div id="app">
    <game-container />
  </div>
</template>

<script>
import GameContainer from './containers/game-container.vue';
export default {
  name: 'App',
  components: { GameContainer },
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