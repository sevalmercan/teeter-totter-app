<template>
  <div id="app">
    <game-container />
  </div>
</template>

<script>
import GameContainer from './containers/game-container.vue';
import mixin from './common/mixin';
export default {
  name: 'App',
  components: { GameContainer },
  mixins: [mixin]
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